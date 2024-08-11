const Banner = require('../models/Banner');

exports.getBanner = async (req, res) => {
  try {
    const banner = await Banner.findOne();
    if (!banner) {
      return res.status(404).json({ error: "Banner not found" });
    }
    res.status(200).json(banner);
  } catch (error) {
    console.error("Error fetching banner:", error.message);
    res.status(500).json({ error: "Server error while fetching the banner" });
  }
};

exports.updateBanner = async (req, res) => {
  const { title, description, timer, link, isVisible } = req.body;

  try {
    let banner = await Banner.findOne();
    
    if (banner) {
      banner.title = title;
      banner.description = description;
      banner.timer = timer;
      banner.link = link;
      banner.isVisible = isVisible;
      await banner.save();
    } else {
      banner = await Banner.create({ title, description, timer, link, isVisible });
    }

    res.status(201).json({ message: "Banner updated successfully" });
  } catch (error) {
    console.error("Error updating banner:", error.message);
    res.status(500).json({ error: "Server error while updating the banner" });
  }
};
