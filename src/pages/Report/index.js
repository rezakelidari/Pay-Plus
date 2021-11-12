import React from "react";
import Styles from "./Report.module.css";
import Title from "../../components/Title";

import User from "../../assets/img/User.svg";
import Phone from "../../assets/img/Phone.svg";
import Transaction from "../../assets/img/Transaction.svg";
import Money from "../../assets/img/Money.svg";
import Loan from "../../assets/img/Loan.svg";

import Support from "../../assets/img/Support.svg";
import Call from "../../assets/img/Call.svg";

function AnnualReport() {
  const generalReportData = [
    { title: "+1,000,000", icon: User, desc: "Number of active installations" },
    { title: "9", icon: Phone, desc: "Number of Pay+ services" },
    {
      title: "+30,000,000",
      icon: Transaction,
      desc: "Number of Pay+ users transactions",
    },
    {
      title: "+$3,300 billion",
      icon: Money,
      desc: "The value of user transactions",
    },
    {
      title: "+50,000",
      icon: Loan,
      desc: "Number of registered users to receive a loan",
    },
  ];

  const supportReportData = [
    { title: "+500,000", icon: Support, desc: "Total incoming user calls" },
    { title: "+470,000", icon: Call, desc: "Total number of answered calls" },
  ];

  const loanReportData = [
    { title: "+45,000", icon: User, desc: "Number of loans provided by the end of 2020" },
    { title: "+$45 million", icon: Money, desc: "The value of loans provided" },
  ];

  return (
    <div className={Styles.annualMain}>
      <div className={Styles.annualHeader}>
        <div className={Styles.annualBox}>
          <Title soBig clickable={false} />
          <h1 className={Styles.annualHeading}>2020 Annual Report</h1>
        </div>
        <span className={Styles.annualScrollDown}></span>
      </div>
      <div className={Styles.annualReports}>
        <div className={Styles.annualReport}>
          <Header title="Pay+ in the past year" />
          <div className={Styles.annualGrid}>
            {generalReportData.map((report) => (
              <Report
                title={report.title}
                icon={report.icon}
                desc={report.desc}
                key={report.title}
              />
            ))}
          </div>
        </div>
        <div className={Styles.annualReport}>
          <Header title="Loans" />
          <div className={Styles.annualGrid}>
            {loanReportData.map((report) => (
              <Report
                title={report.title}
                icon={report.icon}
                desc={report.desc}
                key={report.title}
              />
            ))}
          </div>
        </div>
        <div className={Styles.annualReport}>
          <Header title="Users support" />
          <div className={Styles.annualGrid}>
            {supportReportData.map((report) => (
              <Report
                title={report.title}
                icon={report.icon}
                desc={report.desc}
                key={report.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ title }) {
  return (
    <div className={Styles.annualReportHeader}>
      <span></span>
      {title}
    </div>
  );
}

function Report({ title, icon, desc }) {
  return (
    <div className={Styles.reportWrapper}>
      <div className={Styles.reportLeft}>
        <img src={icon} alt={title} />
      </div>
      <div className={Styles.reportRight}>
        <h1 className={Styles.reportTitle}>{title}</h1>
        <p className={Styles.reportDesc}>{desc}</p>
      </div>
    </div>
  );
}

export default AnnualReport;
