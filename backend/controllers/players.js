const { StatusCodes } = require('http-status-codes');
const pool = require('../db/connect');

const validateFields = (req) => {
    const { name, description, position, team, price, image } = req.body;
    return !name || !description || !position || !team || !price || !image;
};

const getAllPlayers = async (req, res) => {
    const sql = 'SELECT * FROM players';

    pool.query(sql, (queryError, results) => {
        if (queryError) {
            console.error('Database query error:', queryError);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Database query error' });
        } else {
            res.status(StatusCodes.OK).json(results);
        }
    });
}

const getPlayer = async (req, res) => {
    const sql = 'SELECT * FROM players WHERE id = ?';
    const values = [req.params.id];

    pool.query(sql, values, (queryError, results) => {
        if (queryError) {
            console.error('Database query error:', queryError);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Database query error' });
        } else {
            res.status(StatusCodes.OK).json(results);
        }
    });
}

const addPlayer = async (req, res) => {
    if (validateFields(req)) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'All fields are required' });
        return;
    }

    const sql = 'INSERT INTO players(`name`, `description`, `position`, `team`, `price`, `image`) VALUES (?)';
    const values = [req.body.name, req.body.description, req.body.position, req.body.team, req.body.price, req.body.image];

    pool.query(sql, [values], (queryError, results) => {
        if (queryError) {
            console.error('Database query error:', queryError);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Database query error' });
        } else {
            res.status(StatusCodes.OK).json(results);
        }
    });
}

const deletePlayer = async (req, res) => {
    const sql = 'DELETE FROM players WHERE id = ?';
    const values = [req.params.id];

    pool.query(sql, values, (queryError, results) => {
        if (queryError) {
            console.error('Database query error:', queryError);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Database query error' });
        } else {
            res.status(StatusCodes.OK).json(results);
        }
    });
}

const updatePlayer = async (req, res) => {
    if (validateFields(req)) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'All fields are required' });
        return;
    }

    const sql = 'UPDATE players SET `name` = ?, `description` = ?, `position` = ?, `team` = ?, `price` = ?, `image` = ? WHERE id = ?';
    const values = [req.body.name, req.body.description, req.body.position, req.body.team, req.body.price, req.body.image, req.params.id];

    pool.query(sql, values, (queryError, results) => {
        if (queryError) {
            console.error('Database query error:', queryError);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Database query error' });
        } else {
            res.status(StatusCodes.OK).json(results);
        }
    });
}

module.exports = {
    getAllPlayers,
    getPlayer,
    addPlayer,
    deletePlayer,
    updatePlayer
};
