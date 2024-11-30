import MilletWebsite from '../modal/milletWebsiteModal.js';

export const createMilletWebsite = async (req, res) => {
    try {
        const { websiteName, description, websiteLink } = req.body;

        const newWebsite = new MilletWebsite({
            
            websiteName,
            description,
            websiteLink,
        });

        await newWebsite.save();
        res.status(201).json(newWebsite);
    } catch (error) {
        res.status(500).json({ message: 'Error creating website', error: error.message });
    }
};

export const getMilletWebsites = async (req, res) => {
    try {
        const websites = await MilletWebsite.find();
        res.status(200).json(websites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching websites', error: error.message });
    }
};
