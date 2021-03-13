import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import FormInput from "../../shared/FormInput";
import FileUploader from "../../shared/FileUploader";
import { uploadToS3 } from "../../../utils/S3Upload";

const AddPlant = ({ setShowAddEntry }) => {
  const { addPlant } = useContext(GlobalContext);
  const [file, setFile] = useState([]);

  const [name, setName] = useState();
  const [latinName, setLatinName] = useState();
  const [notes, setNotes] = useState();
  const [sowMonth, setSowMonth] = useState();
  const [plantMonth, setPlantMonth] = useState();
  const [flowerMonth, setFlowerMonth] = useState();
  const [pruneMonth, setPruneMonth] = useState();
  const [mainImage, setMainImage] = useState();
  const [images, setImages] = useState();
  const [link, setLink] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    // const url = uploadToS3(file);
    // setMainImageUrl(url);

    const newPlant = {
      name,
      latinName,
      notes,
      sowMonth,
      plantMonth,
      flowerMonth,
      pruneMonth,
      images,
      link,
    };
    addPlant(newPlant);
    setShowAddEntry(false);
  };

  return (
    <div style={{ minWidth: "500px" }}>
      <h3>Add new plant</h3>
      <form onSubmit={onSubmit}>
        <FormInput
          title="Plant Name"
          placeholder="Enter plant name..."
          func={(name) => setName(name)}
        />
        <FormInput
          title="Latin Name"
          placeholder="Enter latin name..."
          func={(name) => setLatinName(name)}
        />
        <FormInput
          title="Month to Sow"
          placeholder="Enter month to sow..."
          func={(month) => setSowMonth(month)}
        />
        <FormInput
          title="Month to Plant Out"
          placeholder="Enter month to plant out..."
          func={(month) => setPlantMonth(month)}
        />
        <FormInput
          title="Flowering Month"
          placeholder="Enter month when this plant will flower..."
          func={(month) => setFlowerMonth(month)}
        />
        <FormInput
          title="Month to Prune"
          placeholder="Enter month to prune..."
          func={(month) => setPruneMonth(month)}
        />
        <FormInput
          title="Link"
          placeholder="Enter link..."
          func={(link) => setLink(link)}
        />
        <FormInput
          title="Notes"
          placeholder="Enter notes..."
          func={(notes) => setNotes(notes)}
        />
        {/* <FileUploader onFileSelect={(file) => setFile(file)} /> */}
        <button className="btn">Add plant</button>
      </form>
    </div>
  );
};

export default AddPlant;
