"use client";

import React, { useState, useRef, useEffect } from "react";
import { DropdownProps, DropdownOption, DropdownType } from "./dropdown.type";
import {
  dropdownVariants,
  dropdownMenuVariants,
  dropdownOptionVariants,
} from "./dropdown.variants";
import { dropdownData } from "./dropdown.constants";

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "선택하세요",
  disabled = false,
  className,
  menuClassName,
  optionClassName,
  type = "report",
  variant = "outline",
  size = "md",
  rounded = "md",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 타입 안전성을 위해 타입 문자열 확인
  const safeType = type === "report" || type === "position" ? type : ("report" as const);

  // type에 따라 옵션을 자동으로 가져오거나 직접 전달된 옵션을 사용
  const dropdownOptions = options || dropdownData[safeType].options;

  // 선택된 옵션 찾기
  const selectedOption = dropdownOptions.find((option) => option.value === value);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* 타입에 따른 라벨 표시 (옵션) */}
      {!options && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {dropdownData[safeType].label}
        </label>
      )}

      {/* 선택 영역 */}
      <div
        className={
          className ||
          dropdownVariants({
            variant,
            size,
            rounded,
            state: disabled ? "disabled" : isOpen ? "active" : "default",
            isOpen,
            type: safeType,
          })
        }
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div
          className={
            menuClassName ||
            dropdownMenuVariants({
              rounded,
              type: safeType,
              animation: "fade",
            })
          }
        >
          {dropdownOptions.map((option) => (
            <div
              key={option.value}
              className={
                optionClassName ||
                dropdownOptionVariants({
                  selected: option.value === value,
                  disabled: option.disabled,
                  type: safeType,
                })
              }
              onClick={() => !option.disabled && handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
