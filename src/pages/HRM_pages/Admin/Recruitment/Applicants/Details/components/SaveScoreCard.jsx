import React from "react";
import { FaStar } from "react-icons/fa";

const SaveScoreCard = () => {
  return (
    <div className="flex flex-col gap-2 justify-start p-4">
      {/* METRIC 1 */}
      <div className="p-4 border rounded space-y-4">
        <div className="flex items-center">
          <p className="text-orange-700">METRIC: </p>
          <p>Technical Skills</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-orange-700">RATING: </p>
          <div className="w-[150px]">2/5</div>
        </div>
        <div>
          <p className="text-orange-700">FEEDBACK: </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            vero harum est natus nihil iure id accusamus, reiciendis possimus
            amet molestiae quae et voluptate distinctio labore repellendus
            doloremque explicabo fugit! Ipsum perspiciatis asperiores
            necessitatibus fugiat suscipit maxime ea corporis voluptatum
            expedita! Impedit dolores ab deleniti ut, sunt aspernatur saepe
            perspiciatis.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-orange-700">REMARK: </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            accusamus dolor vero vitae molestias qui accusantium! Necessitatibus
            suscipit animi sequi perferendis quod pariatur? Perferendis quisquam
            asperiores consequatur fugit porro accusantium rem consequuntur
            veniam provident corporis. Molestiae repellendus modi recusandae
            quas.
          </p>
        </div>
      </div>

      {/* REMARK */}
    </div>
  );
};

export default SaveScoreCard;
