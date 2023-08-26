import React from "react";
import { motion } from "framer-motion";

interface Props {
  itemIcon: string;
  itemName: string;
  tagHandler(data: string): void;
  tagItems: string[];
}

const Item: React.FC<Props> = ({
  itemIcon,
  itemName,
  tagHandler,
  tagItems,
}) => {
  return (
    <motion.div
      className={`flex items-center gap-[6px] rounded-[13px] px-[8px] justify-center cursor-pointer shadow base ${
        tagItems.includes(itemName) ? "bg-[#DBEAFE]" : "bg-white"
      }`}
      whileTap={{ scale: 0.9 }}
      onClick={() => tagHandler(itemName)}
    >
      <img src={itemIcon} alt="" />
      <p className="text-base leading-6 font-bold">{itemName}</p>
    </motion.div>
  );
};

export default Item;
