const { ownerModel, petModel } = require('../models');

function getAllOwners(req, res, next) {
    ownerModel.find()
        .then(owners => {
            res.status(200).json(owners)
        })
        .catch(next);
}

function getOwner(req, res, next) {
    const { ownerId } = req.params;

    ownerModel.findById(ownerId)
        .populate({
            path : 'pets'
          })
        .then(owner => res.json(owner))
        .catch(next);
}

function createOwner(req, res, next) {
    const { tel, fullName, email, imageUrl } = req.body;

    ownerModel.create({ tel, fullName, email, imageUrl })
        .then(owner => res.status(200).json(owner))
        .catch(next);
}

function editOwner(req, res, next) {
    const { ownerId } = req.params;
    const { tel, fullName, email, imageUrl } = req.body;


    ownerModel.findOneAndUpdate({ _id: ownerId }, { tel, fullName, email, imageUrl }, { new: true })
        .then(updatedOwner => {
            res.status(200).json(updatedOwner);
        })
        .catch(next);
}

function deleteOwner(req, res, next) {
    const { ownerId } = req.params;

    Promise.all([
        ownerModel.findOneAndDelete({ _id: ownerId }),
        petModel.findOneAndUpdate({ ownerId: ownerId }, { ownerId: null }),
    ])
        .then(([deletedOne, _]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            }
        })
        .catch(next);
}

module.exports = {
    createOwner,
    getOwner,
    getAllOwners,
    editOwner,
    deleteOwner
}
