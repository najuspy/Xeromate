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
    amount: "$45,321,456.89",
    description: "+20.1% from last month",
  },
  {
    label: "Total Sales",
    amount: "$12,350,432.98",
    description: "+10.1% from last month",

  },
  {
    label: "Gross Profit",
    amount: "$3,67,453.66",
    description: "+19% from last month",
  },
  {
    label: "Net Profit",
    amount: "+$573,456.12",
    description: "+10.2% from last month ",

  },
  {
    label: "ATO Integrated Account",
    amount: "$245,673.44",
    description: "-5.2% from last month ",

  },
  {
    label: "GST",
    amount: "$57,345.61",
    description: "+32.12% from last month ",

  },
  {
    label: "Accounts Receivable",
    amount: "$200,113.50",
    description: "+3.4% from last month ",

  },
  {
    label: "Accounts Payable",
    amount: "$105,503.66",
    description: "-0.3% from last month ",

  },
]


const companyData = [
  {
    name: 'Qantum Eight',
    BankAccounts: 782500,
    Income: 523000,
    GrossProfit: 221000,
    NetProfit: 90000,
    ATOIntegratedAccount: 55000,
    GST: 54000,
    AccountsReceivable: 120000,
    AccountsPayable: 85000
  },
  {
    name: 'Adam Hansford',
    BankAccounts: 720000,
    Income: 475000,
    GrossProfit: 182000,
    NetProfit: 75000,
    ATOIntegratedAccount: 45000,
    GST: 69000,
    AccountsReceivable: 110000,
    AccountsPayable: 92000
  },
  {
    name: 'Piccolo Trattoria',
    BankAccounts: 560000,
    Income: 490000,
    GrossProfit: 210000,
    NetProfit: 82000,
    ATOIntegratedAccount: 48000,
    GST: 42000,
    AccountsReceivable: 105000,
    AccountsPayable: 97000
  },
  {
    name: 'PMJ Developments',
    BankAccounts: 530000,
    Income: 510000,
    GrossProfit: 190000,
    NetProfit: 88000,
    ATOIntegratedAccount: 52000,
    GST: 80000,
    AccountsReceivable: 95000,
    AccountsPayable: 87000
  },
  {
    name: 'LU 88 Investments',
    BankAccounts: 490000,
    Income: 480000,
    GrossProfit: 195000,
    NetProfit: 92000,
    ATOIntegratedAccount: 87000,
    GST: 56000,
    AccountsReceivable: 98000,
    AccountsPayable: 93000
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
