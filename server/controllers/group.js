const Group = require('../models/group');

//import validateGroupInput from group.js

exports.getGroups = [
    function (req, res) {
        Group.find({}, (err, groups) => {
            if (err) return res.status(404).send({ error: err });
            return res.json({
                success: true,
                groups
            });
        });
    }
];

exports.getGroup = [
    function (req, res) {
        
    }
]