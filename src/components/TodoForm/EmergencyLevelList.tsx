import React, { Fragment } from "react";
import ArrowUp from "../../assets/icon-arrow-up.svg";
import Check from "../../assets/icon-check.svg";
import { Listbox, Transition } from "@headlessui/react";
import { UrgencyLevel } from "../../App";
import { emergencyLevel } from "./TodoForm";

type EmergencyLevelListProps = {
  selected: UrgencyLevel;
  setSelected: React.Dispatch<React.SetStateAction<UrgencyLevel>>;
};

export const EmergencyLevelList = ({
  selected,
  setSelected,
}: EmergencyLevelListProps) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                src={ArrowUp}
                className={`${open ? "rotate-180" : ""} h-5 w-5 text-gray-400`}
                alt="fermer le menu"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {emergencyLevel.map((level, levelIdx) => (
                <Listbox.Option
                  key={levelIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={level}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {level}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <img
                            src={Check}
                            className="h-5 w-5"
                            alt="ouvrir le menu"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};
