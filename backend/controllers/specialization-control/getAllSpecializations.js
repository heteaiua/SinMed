const Specialization = require('../../models/specialization');

const showAllSpecializations = async (req, res, next) => {
    let specialization;
    try {

        specialization = await Specialization.find().exec();

        if (!specialization)
            return res.json({
                message: " No specializations found!"
            });
    } catch (err) {
        return res.json({ message: "Could not get specializations.", err: err })
    }
    res.json({
        message: "Specializations: ",
        specialization: specialization
    })

}

module.exports = showAllSpecializations