const { ownerModel, petModel } = require('../models');

function getAllPets(req, res, next) {
    petModel.find()
        .sort({ appointmentTime: 1 })
        .populate('ownerId')
        .then(pets => {
            res.status(200).json(pets)
        })
        .catch(next);
}

function createPet(req, res, next) {
    const { fullName, kind, imageUrl, petOwnerId } = req.body;

    petModel.create({ fullName, kind, imageUrl, ownerId: petOwnerId })
        .then(pet => res.status(200).json(pet))
        .catch(next);
}

function editPet(req, res, next) {
    const { petId } = req.params;
    const { petFullName, petKind, petImageUrl, petOwnerId } = req.body;


    petModel.findOneAndUpdate({ _id: petId }, { fullName: petFullName, kind: petKind, imageUrl: petImageUrl, ownerId: petOwnerId }, { new: true })
        .then(updatedPet => {
            res.status(200).json(updatedPet);
        })
        .catch(next);
}

function createAppointment(req, res, next) {
    const { petId } = req.params;
    const { petOwnerId, petAppointmentTime } = req.body;


    petModel.findOneAndUpdate({ _id: petId }, { ownerId: petOwnerId, appointmentTime: petAppointmentTime }, { new: true })
        .then(updatedPet => {
            res.status(200).json(updatedPet);
        })
        .catch(next);
}

function deletePet(req, res, next) {
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

module.exports = {
    getAllPets,
    createPet,
    editPet,
    deletePet,
    createAppointment
}
