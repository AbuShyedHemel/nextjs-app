"use client";
import { Button, Card, Modal } from "antd";
import { useState } from "react";
const Page = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="bg-white">
      <Card>
        <Modal open={isOpen} okType="dashed" onOk={() => setisOpen(false)} />
        <Button onClick={() => setisOpen(true)}>Click</Button>
      </Card>
    </div>
  );
};

export default Page;
