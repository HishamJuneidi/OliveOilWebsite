const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = req.user.email;

  // the routes are defined here

	router.post('/Item', (req, res, next) => {
  		db.query(
    			'INSERT INTO events (owner, name, description, date) VALUES (?,?,?,?)',
    			[owner, req.body.name, req.body.description, new Date(req.body.date)],
    		(error) => {
      			if (error) {
        			console.error(error);
        			res.status(500).json({status: 'error'});
      			} else {
        			res.status(200).json({status: 'ok'});
      			}
    		}
  		);
	});

///////////////////////////////////////////

	router.get('/Item', function (req, res, next) {
  		db.query('SELECT id, name, description, date FROM events WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?',[owner, 10*(req.params.page || 0)],
    		(error, results) => {
      			if (error) {
        			console.log(error);
        			res.status(500).json({status: 'error'});
      			} else {
        			res.status(200).json(results);
      			}
    		}
  		);
	});
//////////////////////////////////////////////
	router.delete('/Item/:id', function (req, res, next) {
  		db.query(
    			'DELETE FROM events WHERE id=? AND owner=?',
    			[req.params.id, owner],
    		(error) => {
      			if (error) {
        			res.status(500).json({status: 'error'});
      			} else {
        			res.status(200).json({status: 'ok'});
      			}
    		}
  		);
	});
  return router;
}

module.exports = createRouter;
