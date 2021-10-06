import express from 'express';
import http from 'http';
import cluster from 'cluster';
import os from 'os';

import * as puppeteer from 'puppeteer';

import CONFIG from './config';
import router from './routes';
import {LogHandler, ErrorHandler} from '../utils';

const PORT = CONFIG.SERVER.PORT.HTTP;
const CPUS = os.cpus().length;
const app = express();
const main_server = http.createServer(app);

app.use(LogHandler);
app.use(ErrorHandler);
await router(app);

if (CONFIG.SERVER.CLUSTER && cluster.isMaster) {
    for (let i = 0; i < CPUS; i++) {
        cluster.fork();
    }
}
else {
    main_server.listen(PORT);
}

////////////////////////////////////////////////////////////////////////////////////////////////
// Http Event Listener
main_server.on('listening', (error: Error) => {
    if (error) {
        return console.error('Server start failed.\n' + error);
    }
    console.log('Server is running. Info : ' + JSON.stringify(main_server.address()));
});

main_server.on('errorHandler', (error) => {
    console.error('Server start failed.\n' + error);
});

main_server.on('close', (error: Error) => {
    if (error) {
        return console.error('Server close failed.\n' + error);
    }
    console.log('Server closed.');
});

////////////////////////////////////////////////////////////////////////////////////////////////
// Cluster Event Listener
cluster.on('online', (worker) => {
    console.log('Worker %d is online.', worker.process.pid);
});

cluster.on('exit', (worker) => {
    console.log('Worker %d ended.', worker.process.pid);
    cluster.fork();
});
////////////////////////////////////////////////////////////////////////////////////////////////