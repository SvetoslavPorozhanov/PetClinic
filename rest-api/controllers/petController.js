const { ownerModel, petModel } = require('../models');

function getAllPets(req, res, next) {
    const petName = req.query.petName;
    var condition = petName ? { fullName: { $regex: new RegExp(petName), $options: "i" } } : {};

    petModel.find(condition)
        .sort({ appointmentTime: 1 })
        .populate('ownerId')
        .then(pets => {
            res.status(200).json(pets)
        })
        .catch(next);
}

function getPet(req, res, next) {
    const { petId } = req.params;

    petModel.findById(petId)
        .populate('ownerId')
        .then(pet => res.status(200).json(pet))
        .catch(next);
}

function createPet(req, res, next) {
    const { fullName, kind, imageUrl, ownerId, appointmentTime } = req.body;

    if (ownerId === "") {
        petModel.create({ fullName, kind, imageUrl, appointmentTime })
        .then(pet => res.status(200).json(pet))
        .catch(next);
    } else {
        petModel.create({ fullName, kind, imageUrl, ownerId, appointmentTime })
        .then(pet => res.status(200).json(pet))
        .catch(next);
    }

    
}

function editPet(req, res, next) {
    const { petId } = req.params;
    const { fullName, kind, imageUrl, ownerId, appointmentTime } = req.body;

    if (ownerId === "") {
        Promise.all([
            petModel.findOneAndUpdate({ _id: petId }, { fullName, kind, imageUrl, ownerId: null, appointmentTime }, { new: true }),
            ownerModel.findOneAndUpdate({ pets: petId }, { $pull: { pets: petId } }),
        ])
        .then(updatedPet => {
            res.status(200).json(updatedPet);
        })
        .catch(next);
    } else {
        Promise.all([
            petModel.findOneAndUpdate({ _id: petId }, { fullName, kind, imageUrl, ownerId, appointmentTime }, { new: true }),
            owner = ownerModel.findOneAndUpdate({ pets: petId },  { $pull: { pets: petId } }),
            owner = ownerModel.findOneAndUpdate({ _id: ownerId },  { $push: { pets: petId } }),
        ])
        .then(updatedPet => {
            res.status(200).json(updatedPet);
        })
        .catch(next);
    }
}

function deletePetWithOwner(req, res, next) {
    const { petId, ownerId } = req.params;

    Promise.all([
        petModel.findOneAndDelete({ _id: petId }),
        ownerModel.findOneAndUpdate({ _id: ownerId }, { $pull: { pets: petId } }),
    ])
        .then(([deletedOne, _]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            }
        })
        .catch(next);
}

function deletePetWithoutOwner(req, res, next) {
    const { petId } = req.params;

    Promise.all([
        petModel.findOneAndDelete({ _id: petId }),
    ])
        .then(([deletedOne]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            }
        })
        .catch(next);
    
}

module.exports = {
    getAllPets,
    getPet,
    createPet,
    editPet,
    deletePetWithOwner,
    deletePetWithoutOwner,
}
