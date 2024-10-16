
"use client";

"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TipCalculator = () => {
  // Move the state hooks inside the component
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  const handleTipPercentageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTipPercentage(parseFloat(e.target.value));
  };

  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100);
      setTipAmount(tip);
      setTotalAmount(billAmount + tip);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg ">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">Tip Calculator</CardTitle><br></br>
          <CardDescription className="text-black text-1xl font-bold">
            Enter the bill amount and tip percentage to calculate the tip and total.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 focus: font-extrabold ">
          <div className="grid gap-2 " >
            <Label htmlFor="bill-amount ">Bill Amount!</Label>
            <Input className="text-black"
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount "
              value={billAmount !== null ? billAmount : ""}
              onChange={handleBillAmountChange}
            />
          </div>
          <div className="grid gap-2 ">
            <Label htmlFor="tip-percentage">Tip Percentage</Label>
            <Input
              id="tip-percentage"
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={handleTipPercentageChange}
              
            />
          </div>
          <Button onClick={calculateTip}>Calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-2">
          <div className="flex items-center justify-between">
            <span>Tip Amount:</span>
            <span className="font-bold">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total Amount:</span>
            <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-evenly">
          <img
            src="https://play-lh.googleusercontent.com/0L-zrM1OVX1o04DW9Re7QMQzLM5kju5M-qg3it3Gwi7kfpKa5f3fmfHGnDTjhNmGxdE=w240-h480-rw"/></div>
        </CardFooter>
      </Card>
      <h1>presented by:@Rukhsana Rais</h1>
    </div>
  );
};

export default TipCalculator;








