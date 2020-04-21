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
        });

    }
];

exports.createGroup = [
    function (req, res){
        const newGroup = new Group({
            name: req.body.users,
            imageUrl: "",
            users: req.body.users,
            tasks: []
        });
        newGroup.save().then(group => {
            res.json({
                success: true,
                group
            });
        }, err => {
            res.status(400).send(err);
        });
    }
];