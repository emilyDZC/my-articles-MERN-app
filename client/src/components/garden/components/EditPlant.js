import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import FormInput from "../../shared/FormInput";

const EditPlant = ({ plant, setEdit }) => {
  const { updatePlant } = useContext(GlobalContext);

  const [name, setName] = useState(plant.name);
  const [latinName, setLatinName] = useState(plant.latinName);
  const [notes, setNotes] = useState(plant.notes);
  const [sowMonth, setSowMonth] = useState(plant.sowMonth);
  const [plantMonth, setPlantMonth] = useState(plant.plantMonth);
  const [flowerMonth, setFlowerMonth] = useState(plant.flowerMonth);
  const [pruneMonth, setPruneMonth] = useState(plant.pruneMonth);
  const [mainImage, setMainImage] = useState(plant.mainImage);
  const [images, setImages] = useState(plant.images);
  const [link, setLink] = useState(plant.link);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedPlant = {
      id: plant._id,
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
    updatePlant(updatedPlant);
    setEdit(false);
  };

  return (
    <div style={{ minWidth: "500px" }}>
      <h3>Edit plant</h3>
      <form onSubmit={onSubmit}>
        <FormInput
          title="Plant Name"
          placeholder="Enter plant name..."
          func={(name) => setName(name)}
          value={name}
        />
        <FormInput
          title="Latin Name"
          placeholder="Enter latin name..."
          func={(name) => setLatinName(name)}
          value={latinName}
        />
        <FormInput
          title="Month to Sow"
          placeholder="Enter month to sow..."
          func={(month) => setSowMonth(month)}
          value={sowMonth}
        />
        <FormInput
          title="Month to Plant Out"
          placeholder="Enter month to plant out..."
          func={(month) => setPlantMonth(month)}
          value={plantMonth}
        />
        <FormInput
          title="Flowering Month"
          placeholder="Enter month when this plant will flower..."
          func={(month) => setFlowerMonth(month)}
          value={flowerMonth}
        />
        <FormInput
          title="Month to Prune"
          placeholder="Enter month to prune..."
          func={(month) => setPruneMonth(month)}
          value={pruneMonth}
        />
        <FormInput
          title="Link"
          placeholder="Enter link..."
          func={(link) => setLink(link)}
          value={link}
        />
        <FormInput
          title="Notes"
          placeholder="Enter notes..."
          func={(notes) => setNotes(notes)}
          value={notes}
        />
        {/* <FileUploader onFileSelect={(file) => setFile(file)} /> */}
        <button className="btn">Update plant</button>
      </form>
    </div>
  );
};

export default EditPlant;
