import { CompanyProps } from "@/components/ui/BarChar";

// Define a type for the property names
type CompanyProperty = keyof CompanyProps;

// Utility function to sort company data by a specific property and return an array of objects with name and the specified property value
export const sortCompanyData = <T extends CompanyProperty>(data: CompanyProps[], property: T) => {
  // Sort the company data by the specified property in descending order
  const sortedData = data.slice().sort((a, b) => {
    // Type guard to ensure property value is treated as a number
    const propA: number = typeof a[property] === 'number' ? a[property] as number : parseFloat(a[property] as string);
    const propB: number = typeof b[property] === 'number' ? b[property] as number : parseFloat(b[property] as string);
    return propB - propA;
  });
  
  // Map each company to an object containing its name and the specified property value
  const sortedArray = sortedData.map(company => ({
    name: company.name,
    metric: company[property]
  }));

  return sortedArray;
};


