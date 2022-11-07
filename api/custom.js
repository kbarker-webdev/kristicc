const express = require('express');
const router = express.Router();
const { custom } = require('../db');
const { requireAdmin } = require('./utils');

router.post('/', requireAdmin, async (req, res, next) => {
    try {
        const { color, pid, usertext, font, comments, name, phone, email } = req.body;
        const request = await custom.createCustomRequest({ color, pid, usertext, font, comments, name, phone, email });
        res.send(request);
    } catch (error) {
        next(error)
    }
})

router.post('/complete', requireAdmin, async (req, res, next) => {
    try {
        const { id, value } = req.body;
        const request = await custom.markRequestAsComplete(id, value);
        res.send(request);
    } catch (error) {
        next(error)
    }
})

router.get('/', requireAdmin, async (req, res, next) => {
    try {
        const requests = await custom.getCustomRequests();
        requests.sort((a, b) => {
            return a.id - b.id;
        });
        res.send(requests);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', requireAdmin, async (req, res, next) => {
    try {
        const { id } = req.params;
        const requests = await custom.getCustomRequestById(id);
        res.send(requests);
    } catch (error) {
        next(error)
    }
})

router.delete('/complete', requireAdmin, async (req, res, next) => {
    try {
        const deleted = await custom.clearClosedRequests();
        res.send(deleted);
    } catch (error) {
        next(error)
    }
})

module.exports = router;