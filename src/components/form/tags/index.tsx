import React from "react";
import Item from "./Item";
import TagsIcon from "../../../assets/images/icons/tags/arts.svg";
import PhysicIcon from "../../../assets/images/icons/tags/physics.svg";
import Economics from "../../../assets/images/icons/tags/economics.svg";
import Geography from "../../../assets/images/icons/tags/geography.svg";
import Music from "../../../assets/images/icons/tags/music.svg";

interface Props {
  tagItems: string[];
  setTagItems(data: string[]): void;
}

const Index: React.FC<Props> = ({ tagItems, setTagItems }) => {
  const tagHandler = (value: string) => {
    const temp = [...tagItems];
    if (temp.includes(value)) {
      const newArray = temp.filter((el) => el !== value);
      setTagItems(newArray);
    } else {
      temp.push(value);
      setTagItems(temp);
    }
  };

  return (
    <div className="mt-[31px]">
      <p className="text-lg leading-7 font-bold">Tags:</p>
      <p className="text-lg leading-7 font-normal">
        Select topic tags that suit your CAS Project
      </p>
      <div className="flex gap-[17px] flex-wrap mt-[35px]">
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={TagsIcon}
          itemName="Arts"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={PhysicIcon}
          itemName="Physics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Economics}
          itemName="Economics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Geography}
          itemName="Geography"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Music}
          itemName="Music"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={TagsIcon}
          itemName="Arts"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={PhysicIcon}
          itemName="Physics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Economics}
          itemName="Economics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Geography}
          itemName="Geography"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Music}
          itemName="Music"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={TagsIcon}
          itemName="Arts"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={PhysicIcon}
          itemName="Physics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Economics}
          itemName="Economics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Geography}
          itemName="Geography"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Music}
          itemName="Music"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={TagsIcon}
          itemName="Arts"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={PhysicIcon}
          itemName="Physics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Economics}
          itemName="Economics"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Geography}
          itemName="Geography"
        />
        <Item
          tagHandler={tagHandler}
          tagItems={tagItems}
          itemIcon={Music}
          itemName="Music"
        />
      </div>
    </div>
  );
};

export default Index;
