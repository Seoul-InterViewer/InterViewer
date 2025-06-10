import React, { useRef } from "react";
import { Input, inputVariants } from "@/app/components/input";
import useInput from "@/hooks/input/useInput";
import { buttonVariants } from "@/app/components/button";
import { Button } from "@/app/components/button";
import INPUT_FIELDS from "../../constants/inputFields.constant";
import { motion } from "motion/react";
import { joinFormVariants, joinFormItemVariants } from "./joinForm.variants";

export const JoinForm = () => {
  const emailInput = useInput();
  const nicknameInput = useInput();
  const passwordInput = useInput();
  const passwordConfirmInput = useInput();

  const inputHooks = [emailInput, nicknameInput, passwordInput, passwordConfirmInput];

  return (
    <motion.form
      variants={joinFormVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-6 md:gap-8"
    >
      {INPUT_FIELDS.map((field, index, arr) => (
        <motion.div
          key={index}
          className={`md:h-15 ${index === 3 ? "flex h-15" : ""}`}
          variants={joinFormItemVariants}
        >
          <Input
            value={inputHooks[index].value}
            onChange={inputHooks[index].handleChange}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            id={field.id}
            required
            isCredential
            className={inputVariants({ withButton: field.withButton, variant: "credentials" })}
            label={field.label}
          />
          {index === arr.length - 1 && (
            <Button
              type="submit"
              className={buttonVariants({
                color: "black",
                class: "p-2 h-full flex-1 rounded-none",
              })}
            >
              회원가입
            </Button>
          )}
        </motion.div>
      ))}
    </motion.form>
  );
};
