"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, DollarSign, Users, Percent, TrendingUp, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const pricingPlans = [
  { name: 'Starter', price: 299 },
  { name: 'Pro', price: 799 },
  { name: 'Enterprise', price: 1999 },
  { name: 'Custom', price: 0 },
];

const ROICalculator = () => {
  const [listSize, setListSize] = useState(1000);
  const [averageOrderValue, setAverageOrderValue] = useState(50);
  const [conversionRate, setConversionRate] = useState(2);
  const [emailFrequency, setEmailFrequency] = useState(4);
  const [selectedPlan, setSelectedPlan] = useState('Starter');
  const [customInvestment, setCustomInvestment] = useState(299);
  const [results, setResults] = useState({
    additionalRevenue: 0,
    improvedConversionRate: 0,
    additionalOrders: 0,
    roiPercentage: 0,
    roiMultiple: 0,
  });

  const calculateROI = () => {
    const currentRevenue = listSize * (conversionRate / 100) * averageOrderValue * (emailFrequency / 4);
    const improvedConversionRate = Math.min(conversionRate * 1.5, 100);
    const improvedRevenue = listSize * (improvedConversionRate / 100) * averageOrderValue * (emailFrequency / 4);
    const additionalRevenue = improvedRevenue - currentRevenue;
    const additionalOrders = (listSize * (improvedConversionRate / 100)) - (listSize * (conversionRate / 100));
    
    const investment = selectedPlan === 'Custom' ? customInvestment : pricingPlans.find(plan => plan.name === selectedPlan)?.price || 0;
    const roiPercentage = ((additionalRevenue - investment) / investment) * 100;
    const roiMultiple = additionalRevenue / investment;

    setResults({
      additionalRevenue: additionalRevenue,
      improvedConversionRate: improvedConversionRate,
      additionalOrders: additionalOrders,
      roiPercentage: roiPercentage,
      roiMultiple: roiMultiple,
    });
  };

  useEffect(() => {
    calculateROI();
  }, [listSize, averageOrderValue, conversionRate, emailFrequency, selectedPlan, customInvestment]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-primary" />
            ROI Calculator
          </CardTitle>
          <CardDescription>Estimate your potential return on investment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="pricingPlan" className="flex items-center text-lg font-semibold">
                <DollarSign className="mr-2 h-5 w-5" />
                Select Your Pricing Plan
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="ml-2 h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Choose a pricing plan or enter a custom investment amount</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Select onValueChange={setSelectedPlan} value={selectedPlan}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  {pricingPlans.map((plan) => (
                    <SelectItem key={plan.name} value={plan.name}>
                      {plan.name} {plan.price > 0 && `($${plan.price}/month)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedPlan === 'Custom' && (
              <div>
                <Label htmlFor="customInvestment" className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Custom Investment ($)
                </Label>
                <Input
                  id="customInvestment"
                  type="number"
                  value={customInvestment}
                  onChange={(e) => setCustomInvestment(Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>
            )}
            <div className="border-t pt-6">
              <Label htmlFor="listSize" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Email List Size
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="ml-2 h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>The total number of subscribers in your email list</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <div className="flex items-center space-x-4 mt-2">
                <Slider
                  id="listSize"
                  min={100}
                  max={100000}
                  step={100}
                  value={[listSize]}
                  onValueChange={(value) => setListSize(value[0])}
                  className="flex-grow"
                />
                <Input
                  type="number"
                  value={listSize}
                  onChange={(e) => setListSize(Number(e.target.value))}
                  className="w-24"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="averageOrderValue" className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                Average Order Value ($)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="ml-2 h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>The average amount spent per order</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <div className="flex items-center space-x-4 mt-2">
                <Slider
                  id="averageOrderValue"
                  min={1}
                  max={1000}
                  step={1}
                  value={[averageOrderValue]}
                  onValueChange={(value) => setAverageOrderValue(value[0])}
                  className="flex-grow"
                />
                <Input
                  type="number"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="w-24"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="conversionRate" className="flex items-center">
                <Percent className="mr-2 h-4 w-4" />
                Current Conversion Rate (%)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="ml-2 h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>The percentage of email recipients who make a purchase</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <div className="flex items-center space-x-4 mt-2">
                <Slider
                  id="conversionRate"
                  min={0.1}
                  max={100}
                  step={0.1}
                  value={[conversionRate]}
                  onValueChange={(value) => setConversionRate(value[0])}
                  className="flex-grow"
                />
                <Input
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-24"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="emailFrequency" className="flex items-center">
                <BarChart className="mr-2 h-4 w-4" />
                Email Frequency (per month)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="ml-2 h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>How many emails you send to your list each month</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <div className="flex items-center space-x-4 mt-2">
                <Slider
                  id="emailFrequency"
                  min={1}
                  max={12}
                  step={1}
                  value={[emailFrequency]}
                  onValueChange={(value) => setEmailFrequency(value[0])}
                  className="flex-grow"
                />
                <Input
                  type="number"
                  value={emailFrequency}
                  onChange={(e) => setEmailFrequency(Number(e.target.value))}
                  className="w-24"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="mr-2 h-6 w-6 text-primary" />
            Projected Results
          </CardTitle>
          <CardDescription>See your potential growth with InboxAgency.io</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold">Additional Monthly Revenue</Label>
              <p className="text-3xl font-bold text-primary">${results.additionalRevenue.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">
                This is the extra revenue you could generate each month by improving your email marketing with InboxAgency.io.
              </p>
            </div>
            <div>
              <Label className="text-lg font-semibold">Improved Conversion Rate</Label>
              <p className="text-3xl font-bold text-green-500">{results.improvedConversionRate.toFixed(2)}%</p>
              <p className="text-sm text-muted-foreground">
                We estimate a 50% improvement in your conversion rate, from {conversionRate}% to {results.improvedConversionRate.toFixed(2)}%.
                This means more of your email recipients are likely to make a purchase.
              </p>
            </div>
            <div>
              <Label className="text-lg font-semibold">Additional Monthly Orders</Label>
              <p className="text-3xl font-bold text-blue-500">{Math.round(results.additionalOrders)}</p>
              <p className="text-sm text-muted-foreground">
                This is the number of extra orders you could receive each month due to improved email marketing strategies.
              </p>
            </div>
            <div>
              <Label className="text-lg font-semibold">ROI Percentage</Label>
              <p className="text-3xl font-bold text-purple-500">{results.roiPercentage.toFixed(2)}%</p>
              <p className="text-sm text-muted-foreground">
                This represents the return on investment as a percentage. It's calculated by dividing the additional revenue (minus the investment) by your investment.
                A higher percentage indicates a better return on your email marketing investment.
              </p>
            </div>
            <div>
              <Label className="text-lg font-semibold">ROI Multiple</Label>
              <p className="text-3xl font-bold text-orange-500">{results.roiMultiple.toFixed(2)}x</p>
              <p className="text-sm text-muted-foreground">
                This shows how many times you could potentially multiply your investment. An ROI multiple of 2x means you could double your investment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICalculator;