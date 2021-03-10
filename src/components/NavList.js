import React from "react";
import NavListData from "./NavListData";
import PrimaryBtn from "./PrimaryBtn";

const NavList = () => {
  return (
    <>
      {NavListData.map((btn) => {
        const { names, label, id } = btn;
        return (
          <>
            <article key={id} className="w-full lg:col-span-2">
              <h6 className="label">{label}</h6>
              <div className="space-y-1 flex flex-col items-start">
                {names.map((btn, index) => {
                  return <PrimaryBtn name={btn} index={index} />;
                })}
              </div>
            </article>
          </>
        );
      })}
    </>
  );
};

export default NavList;
