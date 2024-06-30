const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');


const prisma = new PrismaClient;


// Associations requests handlers

const createAssociation = async (association) => {
    try {
        await prisma.association.create({
            data: {
                ...association,
                programme: {
                    connect: {
                        id: association.programme
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
const retrieveAssociations = async (query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        if (page && limit) {
            const associations = await prisma.association.findMany({
                skip : ((page - 1) * limit),
                take : limit,
                include : {
                    notifications : {
                        select : {
                            id : true,
                            titre : true
                        }
                    }
                }
            });
            return associations
        } else {            
            const associations = await prisma.association.findMany({
                include : {
                    notifications : {
                        select : {
                            id : true,
                            titre : true
                        }
                    }
                }
            })
            return associations
        }
    } catch (error) {
        console.error(error);
    }
}
const retrieveAssociation = async (association_id) => {
    try {
        const association = await prisma.association.findUnique({
            where: {
                id: parseInt(association_id)
            },
            include : {
                notifications : {
                    select : {
                        id : true,
                        titre : true
                    }
                }
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
            where: {
                id: parseInt(association_id)
            },
            data: {
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
            where: {
                id: parseInt(association_id)
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}


const createAssociationBranch = async (association_id, datas) => {
    try {
        await prisma.succursale.create({
            data: {
                ...datas,
                association: {
                    connect: {
                        id: parseInt(association_id)
                    }
                }
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}
const retrieveAssociationBranches = async (association_id, query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit)
    try {
        if (page && limit) {
            if (association_id) {
                const branches = await prisma.succursale.findMany({
                    where : {
                        association_id : parseInt(association_id)
                    },
                    skip : ((page - 1) * limit),
                    take : limit
                });
                return branches;
            }
            const branches = await prisma.succursale.findMany({
                skip : ((page-1)*limit),
                take : limit
            })
            return branches
        } else {            
            const branches = await prisma.succursale.findMany();
            return branches;
        }
    } catch (error) {
        console.error(error);
    }
}
const retrieveAssociationBranch = async (association_id, branch_id) => {
    try {
        const branch = await prisma.succursale.findUnique({
            where: {
                association_id: parseInt(association_id),
                id: parseInt(branch_id)
            }
        })
        return branch
    } catch (error) {
        console.error(error);
    }
}
const changeAssociationBranch = async (association_id, branch_id, datas) => {
    try {
        await prisma.succursale.update({
            where: {
                association_id: parseInt(association_id),
                id: parseInt(branch_id)
            },
            data: {
                ...datas
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}
const removeAssociationBranch = async (association_id, branch_id) => {
    try {
        await prisma.succursale.delete({
            where: {
                association_id: parseInt(association_id),
                id: parseInt(branch_id)
            }
        })
    } catch (error) {
        console.error(error);
        return false;
    }
}


const createAssociationNotif = async (association_id, datas) => {
    try {
        await prisma.notification.create({
            data: {
                association: {
                    connect: {
                        id: parseInt(association_id)
                    }
                },
                ...datas
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}
const retrieveAssociationNotifs = async (association_id, query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        if (page && limit) {
            const notifs = await prisma.notification.findMany({
                where : {
                    association_id : parseInt(association_id)
                },
                skip : ((page - 1) * limit),
                take : limit
            });
            return notifs
        } else {            
            const notifs = await prisma.notification.findMany()
            return notifs
        }
    } catch (error) {
        console.error(error);
    }
}
const retrieveAssociationNotif = async (association_id, notif_id) => {
    try {
        const notif = await prisma.notification.findUnique({
            where: {
                association_id: parseInt(association_id),
                id: parseInt(notif_id)
            }
        })
        return notif
    } catch (error) {
        console.error(error);
    }
}
const changeAssociationNotif = async (association_id, notif_id, datas) => {
    try {
        await prisma.notification.update({
            where: {
                association_id: parseInt(association_id),
                id: parseInt(notif_id)
            },
            data: {
                ...datas
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const removeAssociationNotif = async (association_id, notif_id) => {
    try {
        await prisma.notification.delete({
            where: {
                association_id: parseInt(association_id),
                id: parseInt(notif_id)
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}

// Contributions requests handlers

const createContribution = async (datas) => {
    try {
        await prisma.cotisation.create({
            data: {
                ...datas,
                association : {
                    connect : {
                        id : datas.association
                    }
                },
                type_cotisation : {
                    connect : {
                        id : datas.association
                    }
                }
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false;
    }
}
const retrieveContributions = async (association_id, query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit); 
    try {
        if (page && limit) {
            if (association_id) {
                const contribs = await prisma.cotisation.findMany({
                    where: {
                        association_id: parseInt(association_id)
                    },
                    include : {
                        paiements : {
                            select : {
                                reference : true,
                                utilisateur_id : true,
                                montant : true,
                                devise : true
                            }
                        }
                    },
                    skip : ((page-1)*limit),
                    take : limit
                })
                return contribs
            }
            const contribs = await prisma.cotisation.findMany({
                skip : ((page-1)*limit),
                take : limit,
                include : {
                    paiements : {
                        select : {
                            reference : true,
                            utilisateur_id : true,
                            montant : true,
                            devise : true
                        }
                    }
                }
            });
            return contribs;
        } else {
            const contribs = await prisma.cotisation.findMany({
                    include : {
                        paiements : {
                            select : {
                                reference : true,
                                utilisateur_id : true,
                                montant : true,
                                devise : true
                            }
                        }
                    },
            })
            return contribs
        }
    } catch (error) {
        console.error(error);
    }
}
const retrieveContribution = async (contrib_id) => {
    try {
        const contrib = await prisma.cotisation.findUnique({
            where: {
                id: parseInt(contrib_id)
            },
            include : {
                paiements : {
                    select : {
                        reference : true,
                        utilisateur_id : true,
                        montant : true,
                        devise : true
                    }
                }
            }
        })
        return contrib
    } catch (error) {
        console.error(error);
    }
}
const changeContribution = async (contrib_id, datas) => {
    try {
        await prisma.cotisation.update({
            where: {
                id: parseInt(contrib_id)
            },
            data: {
                ...datas
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}
const removeContribution = async (contrib_id) => {
    try {
        await prisma.cotisation.delete({
            where: {
                id: parseInt(contrib_id)
            }
        })
        return true;
    } catch (error) {
        console.error(error);
        return false
    }
}


const createContributionType = async (datas) => {
    try {
        await prisma.type_Cotisation.create({
            data: {
                ...datas
            }
        })
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const retrieveContributionTypes = async (query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        if (page && limit) {
            const types = await prisma.type_Cotisation.findMany({
                skip : ((page-1)*limit),
                take : limit
            });
            return types;
        } else {
            const types = await prisma.type_Cotisation.findMany();
            return types;
        }
    } catch (error) {
        console.error(error);
    }
}
const retrieveContributionType = async (type_id) => {
    try {
        const type = await prisma.type_Cotisation.findUnique({
            where: {
                id: parseInt(type_id)
            }
        });
        return type
    } catch (error) {
        console.error(error);
    }
}
const changeContributionType = async (type_id, datas) => {
    try {
        await prisma.type_Cotisation.update({
            where: {
                id: parseInt(type_id)
            },
            data: {
                ...datas
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const removeContributionType = async (type_id) => {
    try {
        await prisma.type_Cotisation.delete({
            where: {
                id: parseInt(type_id)
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


// Payments requests handlers

const createPayment = async (datas) => {
    try {
        await prisma.paiement.create({
            data : {
                ...datas,
                cotisation : {
                    connect : {
                        id : datas.cotisation
                    }
                },
                utilisateur : {
                    connect : {
                        id : datas.utilisateur
                    }
                }
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const retrievePayments = async (query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        if (page && limit) {
            const payments = await prisma.paiement.findMany({
                skip : ((page-1) * limit),
                take : limit
            });
            return payments;
        } else {
            const payments = await prisma.paiement.findMany()
            return payments;
        }
    } catch (error) {
        console.error(error);
    }
}

const retrievePayment = async (payment_id) => {
    try {
        const payment = await prisma.paiement.findUnique({
            where : {
                id : parseInt(payment_id)
            }
        })
        return payment;
    } catch (error) {
        console.error(error);
    }
}

const changePayment = async (payment_id, datas) => {
    try {
        await prisma.paiement.update({
            where : {
                id : parseInt(payment_id)
            },
            data : {
                ...datas
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const removePayment = async () => {
    try {
        await prisma.paiement.delete({
            where : {
                id : parseInt(payment_id)
            }
        });
        return true; 
    } catch (error) {
        console.error(error);
        return false;
    }
}


// Permissions requests handlers

const createPermission = async (datas) => {
    try {
        await prisma.permission.create({
            data: {
                ...datas
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const retrievePermission = async (permission_id) => {
    try {
        const permission = await prisma.permission.findUnique({
            where: {
                id: parseInt(permission_id)
            },
            include : {
                profils_utilisateurs : {
                    select : {
                        label : true
                    }
                }
            }
        });
        return permission
    } catch (error) {
        console.error(error);
    }
}
const changePermission = async (permission_id) => {
    try {
        await prisma.permission.update({
            where: {
                id: parseInt(permission_id)
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const removePermission = async (permission_id) => {
    try {
        await prisma.permission.delete({
            where: {
                id: parseInt(permission_id)
            }
        });
        return true
    } catch (error) {
        console.error(error);
        return false;
    }
}

const retrievePermissions = async (query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        if (page && limit) {
            const perms = await prisma.permission.findMany({
                skip: ((page - 1) * limit),
                take: limit,
                include : {
                    profils_utilisateurs : {
                        select : {
                            label : true
                        }
                    },
                    
                }
            })
            return perms
        } else {
            const perms = await prisma.permission.findMany({
                include : {
                    profils_utilisateurs : {
                        select : {
                            label : true
                        }
                    }
                }
            })
            return perms
        }
    } catch (error) {
        console.error(error);
    }
}


// Programs requests handlers

const createProgram = async (program) => {
    try {
        await prisma.programme.create({
            data: {
                ...program
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false    // Failure to create an association entity
    }
}
const retrievePrograms = async (query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        if (page && limit) {
            const programs = await prisma.programme.findMany({
                skip: ((page - 1) * limit),
                take: limit,
                include : {
                    associations : {
                        select : {
                            id : true,
                            nom : true
                        }
                    }
                }
            });
            return programs;
        } else {
            const programs = await prisma.programme.findMany({
                include : {
                    associations : {
                        select : {
                            id : true,
                            nom : true
                        }
                    }
                }
            })
            return programs
        }
    } catch (error) {
        console.error(error);
    }
}
const retrieveProgram = async (program_id) => {
    try {
        const program = await prisma.programme.findUnique({
            where: {
                id: parseInt(program_id)
            },
            include : {
                associations : {
                    select : {
                        id : true,
                        nom : true
                    }
                }
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
            where: {
                id: parseInt(program_id)
            },
            data: {
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
            where: {
                id: parseInt(program_id)
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}


// Users requests handlers

const createUser = async (datas) => {
    try {
        const hashedPassword = bcrypt.hashSync(datas.password, 15)
        await prisma.utilisateur.create({
            data : {
                ...datas,
                password : hashedPassword
                
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const retrieveUsers = async (profile_label, query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        let users;
        if (page && limit) {
            if (profile_label) {
                users = await prisma.utilisateur.findMany({
                    where : {
                        profil_label : profile_label
                    },
                    skip : ((page-1)*limit),
                    take : limit,
                    select :  {
                        id : true,
                        nom : true,
                        prenom : true,
                        postnom : true,
                        phone1 : true,
                        association_label : true,

                    },
                    include : {
                        paiements : {
                            select : {
                                reference : true,
                                montant : true,
                                devise : true,
                                cotisation_label : true
                            }
                        }
                    }
                })
            } else {
                users = await prisma.utilisateur.findMany({
                    skip : ((page-1)*limit),
                    take : limit,
                    select :  {
                        id : true,
                        nom : true,
                        prenom : true,
                        postnom : true,
                        phone1 : true,
                        association_label : true,

                    },
                    include : {
                        paiements : {
                            select : {
                                reference : true,
                                montant : true,
                                devise : true,
                                cotisation_label : true
                            }
                        }
                    }
                    
                })
            }
        }
        users = await prisma.utilisateur.findMany({
            select :  {
                id : true,
                nom : true,
                prenom : true,
                postnom : true,
                email:  true,
                phone1 : true,
                phone2 : true,
                association_label : true,
                profil_label : true

            }
        })
        return users;
    } catch (error) {
        console.error(error);
    }
}
const retrieveUser = async (user_id) => {
    try {
        const user = await prisma.utilisateur.findUnique({
            where : {
                id : user_id
            },
            select :  {
                id : true,
                nom : true,
                prenom : true,
                postnom : true,
                email:  true,
                phone1 : true,
                phone2 : true,
                association_label : true,
                profil_label : true

            }
        });
        return user;
    } catch (error) {
        console.error(error);
    }
}
const changeUser = async (user_id, datas) => {
    try {
        await prisma.utilisateur.update({
            where : {
                id : user_id
            },
            data : {
                ...datas
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const removeUser = async (user_id) => {
    try {
        await prisma.utilisateur.delete({
            where : {
                id : user_id
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const findUserByMailOrPhone = async (email, phone) => {
    try {
        const user = await prisma.utilisateur.findFirst({
            where : {
                OR : [
                    {
                        email : {
                            equals : email
                        }
                    },
                    {
                        phone1 : {
                            equals : phone
                        }
                    }
                ]
            }
        });
        return user;
    } catch (error) {
        console.error(error);
    }
}

const createUserProfile = async (datas) => {
    try {
        await prisma.profil_Utilisateur.create({
            data : {
                ...datas
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const retrieveUserProfiles = async (query) => {
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    try {
        if (page && limit) {
            const profiles = await prisma.profil_Utilisateur.findMany({
                skip :  ((page-1)*limit),
                take : limit,
                include : {
                    utilisateur : {
                        select : {
                            id : true
                        }
                    },
                    permissions : {
                        select : {
                            label : true
                        }
                    }
                }
            });
            return profiles;
        }
        const profiles = await prisma.profil_Utilisateur.findMany({
            include : {
                utilisateur : {
                    select : {
                        id : true
                    }
                },
                permissions : {
                    select : {
                        label : true
                    }
                }
            }
        });
        return profiles;
    } catch (error) {
        console.error(error);
    }
}
const retrieveUserProfile = async (profile_id) => {
    try {
        const profile = await prisma.profil_Utilisateur.findUnique({
            where : {
                id : parseInt(profile_id)
            },
            include : {
                utilisateur : {
                    select : {
                        id : true
                    }
                },
                permissions : {
                    select : {
                        label : true
                    }
                }
            }
        });
        return profile;
    } catch (error) {
        console.error(error);
    }
}
const changeUserProfile = async (profile_id, datas) => {
    try {
        await prisma.profil_Utilisateur.update({
            where : {
                id : parseInt(profile_id)
            },
            data : {
                ...datas
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const removeUserProfile = async (profile_id) => {
    try {
        await prisma.profil_Utilisateur.delete({
            where : {
                id : parseInt(profile_id)
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}




module.exports = {
    createAssociation, retrieveAssociations, retrieveAssociation, changeAssociation, removeAssociation,
    createProgram, retrievePrograms, retrieveProgram, changeProgram, removeProgram,
    createAssociationBranch, retrieveAssociationBranches, retrieveAssociationBranch, changeAssociationBranch, removeAssociationBranch,
    createAssociationNotif, retrieveAssociationNotifs, retrieveAssociationNotif, changeAssociationNotif, removeAssociationNotif,
    createContribution, retrieveContribution, retrieveContributions, changeContribution, removeContribution,
    createPermission, retrievePermissions, retrievePermission, changePermission, removePermission,
    createContributionType, retrieveContributionTypes, retrieveContributionType, changeContributionType, removeContributionType,
    createUser, retrieveUsers, retrieveUser, changeUser, removeUser, findUserByMailOrPhone,
    createUserProfile, retrieveUserProfiles, retrieveUserProfile, changeUserProfile, removeUserProfile,
    createPayment, retrievePayments, retrievePayment, changePayment, removePayment,
    findUserByMailOrPhone
};
