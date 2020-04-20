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
        const { groupId } = req.params;
        Group.findOne({ _id: groupId }, (err, group) => {
            if (!group) return res.status(404).send({
                success: false,
                error: 'Group not found'
            });
        })

    }
]