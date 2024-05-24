"use client";
import Image from "next/image";
import PageTitle from '@/components/PageTitle'
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/ui/BarChar"
import SalesCard, { SalesProps } from "@/components/ui/SalesCard";
import { CompanyProps } from '@/components/ui/BarChar'
import { useEffect, useState } from "react";
import {sortCompanyData} from "@/lib/sortData"

const cardData: CardProps[] = [
  {
    label: "Total Bank Balance",
    amount: "$528,512.15",
    description: "+20.1% from last month",
  },
  {
    label: "Total Sales",
    amount: "$3,049,742.35",
    description: "+10.1% from last month",

  },
  {
    label: "Gross Profit",
    amount: "$916,014.49",
    description: "+19% from last month",
  },
  {
    label: "Net Profit",
    amount: "+481,952.49",
    description: "+10.2% from last month ",

  },
  {
    label: "ATO Integrated Account",
    amount: "$11138.00",
    description: "-5.2% from last month ",

  },
  {
    label: "GST",
    amount: "$382,477.36",
    description: "+32.12% from last month ",

  },
  {
    label: "Accounts Receivable",
    amount: "$3,151.50",
    description: "+3.4% from last month ",

  },
  {
    label: "Accounts Payable",
    amount: "$310",
    description: "-0.3% from last month ",

  },
]


const companyData = [
  {
    name: 'Qantum Eight',
    BankAccounts: 1720.84,
    Income: 3915,
    GrossProfit: 3915,
    NetProfit: 3654.78,
    ATOIntegratedAccount: 0,
    GST: 749.19,
    AccountsReceivable: 3151.50,
    AccountsPayable: 0
  },
  {
    name: 'Adam Hansford',
    BankAccounts: 20914.51,
    Income: 12576.71,
    GrossProfit: 12104.84,
    NetProfit: 2217.09,
    ATOIntegratedAccount: 11138.00,
    GST: 2063.49,
    AccountsReceivable: 0,
    AccountsPayable: 0
  },
  {
    name: 'Piccolo Trattoria',
    BankAccounts: 76614.40,
    Income: 133250.64,
    GrossProfit: 99177.18,
    NetProfit: 16753.50,
    ATOIntegratedAccount: 0,
    GST: 0,
    AccountsReceivable: 0,
    AccountsPayable: 310
  },
  {
    name: 'PMJ Developments',
    BankAccounts: 4354.91,
    Income: NaN,
    GrossProfit: NaN,
    NetProfit: 4690.07,
    ATOIntegratedAccount: 0,
    GST: 0,
    AccountsReceivable: 0,
    AccountsPayable: 0
  },
  {
    name: 'LU 88 Investments',
    BankAccounts: 424907.49,
    Income: 2900000,
    GrossProfit: 800817.47,
    NetProfit: 454637.53,
    ATOIntegratedAccount: 0,
    GST: 379664.68,
    AccountsReceivable: 0,
    AccountsPayable: 0
  }
];



export default function Home() {

  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanyIndex((prevIndex) => (prevIndex + 1) % companyData.length);
    }, 99999999); // Change company every 20 seconds

    return () => clearInterval(interval);
  }, [companyData.length]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            description={d.description}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid drig-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold"> {companyData[currentCompanyIndex].name}</p>
          <BarChart data={companyData[currentCompanyIndex]} />
        </CardContent>
        <CardContent className="flex justify-between gap-4" >
          <section>
            <p>Top 5 </p>
            <p className="text-sm text-gray-400">
              Total Balance
            </p>
          </section>
          {sortCompanyData(companyData, "BankAccounts").map((d, i) => (
            <SalesCard key={i}
             name={d.name}
             metric={d.metric}
            />
          ))}

        </CardContent>
      </section>
    </div>
  );
}
