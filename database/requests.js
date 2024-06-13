const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');


const prisma = new PrismaClient;


// Associations requests handlers

const createAssociation = async (association) => {
    try {
        await prisma.association.create({
            data : {
                ...association,
                programme : {
                    connect : {
                        id : association.programme
                    }
                }
            }
        })
        return true;
    } catch (error) {
        console.error(error);
        return false
    }
}


const retrieveAssociations = async () => {
    try {
        const associations = await prisma.association.findMany()
        return associations
    } catch (error) {
        console.error(error);
    }
}


const retrieveAssociation = async (association_id) => {
    try {
        const association = await prisma.association.findUnique({
            where : {
                id : parseInt(association_id)
            }
        })
        if (!association) {
            return null
        }
        return association
    } catch (error) {
        console.error(error);
    }
}


const changeAssociation = async (association_id, datas) => {
    try {
        await prisma.association.update({
            where : {
                id : parseInt(association_id)
            },
            data : {
                ...datas
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}


const removeAssociation = async (association_id) => {
    try {
        await prisma.association.delete({
            where : {
                id : parseInt(association_id)
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}

// Contributions requests handlers

// Drivers requests handlers

// Notifications requests handlers

// Payments requests handlers

// Permissions requests handlers

// Programs requests handlers

const createProgram = async (program) => {
    try {
        await prisma.programme.create({
            data : {
                ... program
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false    // Failure to create an association entity
    }
}


const retrievePrograms = async () => {
    try {
        const programs = await prisma.programme.findMany()
        return programs
    } catch (error) {
        console.error(error);
    }
}


const retrieveProgram = async (program_id) => {
    try {
        const program = await prisma.programme.findUnique({
            where : {
                id : parseInt(program_id)
            }
        })
        if (!program) {
            return null
        }
        return program
    } catch (error) {
        console.error(error);
    }
}


const changeProgram = async (program_id, datas) => {
    try {
        await prisma.programme.update({
            where : {
                id : parseInt(program_id)
            },
            data : {
                ...datas
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}


const removeProgram = async (program_id) => {
    try {
        await prisma.programme.delete({
            where : {
                id : parseInt(program_id)
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}


// Users requests handlers



module.exports = {
    createAssociation, retrieveAssociations, retrieveAssociation, changeAssociation, removeAssociation,
    createProgram, retrievePrograms, retrieveProgram, changeProgram, removeProgram
};
