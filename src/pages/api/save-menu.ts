import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import Ajv from "ajv";

const ajv = new Ajv();

const schema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      title: { type: "string" },
      items: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            priceM: { type: "string" },
            priceL: { type: "string" },
            priceXL: { type: "string" },
            image: { type: "string" },
          },
          required: ["name", "description"],
        },
      },
    },
    required: ["title", "items"],
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const menuData = req.body;

    const validate = ajv.compile(schema);
    const valid = validate(menuData);

    if (!valid) {
      return res.status(400).json({ errors: validate.errors });
    }

    const filePath = path.resolve("./public/menu.json");
    fs.writeFile(filePath, JSON.stringify(menuData, null, 2), (err) => {
      if (err) {
        res.status(500).json({ message: "Error saving menu data" });
      } else {
        res.status(200).json({ message: "Menu data saved successfully" });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}