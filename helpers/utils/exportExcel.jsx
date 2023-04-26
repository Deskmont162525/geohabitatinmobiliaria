import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

export const exportToCSV = (arrayData, nameSheet) => {
  const ws = XLSX.utils.json_to_sheet(arrayData);
  const wb = {
    Sheets: { [nameSheet]: ws },
    SheetNames: [nameSheet],
  };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  const fileName = nameSheet;
  FileSaver.saveAs(data, fileName + fileExtension);
};
