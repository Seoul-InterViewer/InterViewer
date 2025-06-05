"use client";

import React from "react";
import { BreadCrumb } from "@/app/components/breadCrumb";
import { List, listVariants } from "@/app/components/list";
import { Button, buttonVariants } from "@/app/components/button";
import { Modal, modalVariants } from "@/app/components/modal";
import useModal from "@/hooks/modal/useModal";
import { AnimatePresence } from "motion/react";
import { gameQuestions } from "./mocks/gamePageData";
import { GamePageListItem } from "./components/GamePageListItem";

export default function page() {
  const modalProps = useModal();


  return (
    <section className="w-full flex flex-col gap-7.5">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "빈칸채우기", href: "/games" },
        ]}
      />
      <List className={listVariants()}>
        {gameQuestions.map((gameQuestion) => {
          return <GamePageListItem key={gameQuestion.id} gameQuestion={gameQuestion} onOpen={modalProps.open}/>;
        })}
      </List>
      <AnimatePresence>
        {modalProps.isOpen && (
          <Modal
            isOpen={modalProps.isOpen}
            onClose={modalProps.close}
            className={modalVariants({ size: "default" })}
            closeButton={true}
            closeWithOverlay={true}
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-7.5">
              <h3 className="md:font-regular-18 font-regular-14">정말로 게임을 삭제하시겠습니까?</h3>
              <Button
                type="button"
                className={buttonVariants({ size: "lg", color: "red", hover: true })}
              >
                네, 삭제할게요.
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
