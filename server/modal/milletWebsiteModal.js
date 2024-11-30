import mongoose from 'mongoose';

const MilletWebsiteSchema = new mongoose.Schema({
    
    websiteName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    websiteLink: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const MilletWebsite = mongoose.model('MilletWebsite', MilletWebsiteSchema);

export default MilletWebsite;
