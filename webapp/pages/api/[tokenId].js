export default function handler(req, res) {
    const tokenId = req.query.tokenId;
    const image_url = "https://raw.githubusercontent.com/jorsh/nft-collection/main/webapp/public/cryptodevs/";

    res.status(200).json({
        name: "Crypto Badge #" + tokenId,
        description: "Crypto Badges is a collection of crypto assets",
        image: image_url + tokenId + ".svg",
        external_url: "https://github.com/jorsh/nft-collection/tree/main/webapp/public/cryptodevs"
    });
}
