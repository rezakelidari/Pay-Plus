import React from "react";
import Styles from "./Services.module.css";
import DigitalWallet from "../../assets/img/Wallet.png";
import SimcardCharge from "../../assets/img/Simcard_charge.png";
import Internet from "../../assets/img/Internet.png";
import Bill from "../../assets/img/Bill.png";
import TransferMoney from "../../assets/img/Transfer_Money.png";
import InstallmentPurchase from "../../assets/img/Installment_purchase.png";
import Tolls from "../../assets/img/Tolls.png";
import TaxiFares from "../../assets/img/Taxi_fares.png";
import Charity from "../../assets/img/Charity.png";

function Services() {
  const services = [
    {
      name: "Digital Wallet",
      icon: DigitalWallet,
      desc: "Pay+ offers you a digital wallet that you can recharge with your Visa, MasterCard and other accounts and withdraw from your wallet quickly; You can easily use your digital wallet in your online shopping. In addition to your bank accounts, all Pay+ features can also be used with your digital wallet.",
    },
    {
      name: "Online top-up",
      icon: SimcardCharge,
      desc: "You can quickly and easily increase the credit of your SIM card with Pay+. You can also set reminders or enable auto-recharge so that your SIM card will be charged automatically at the time you specify (using your digital wallet balance).",
    },
    {
      name: "Pay bills",
      icon: Bill,
      desc: "In pay + you can easily pay your bills; After paying each bill, the bill details are saved for faster payment next time. Automatic reminder setting and payment are also available.",
    },
    {
      name: "Buy internet package",
      icon: Internet,
      desc: "You can simply buy internet package for yourself in Pay+. Automatic reminder and auto charge feature is also available for this item.",
    },
    {
      name: "Transfer Money",
      icon: TransferMoney,
      desc: "Money transfer is another Pay + service that is done quickly, easily and instantly. You can send money to any other account around the world with any account; You can also transfer money from your digital wallet to other Pay + users' wallets. You can also set a reminder for your installments to quickly transfer money with one click and pay your installment (digital wallet balance only).",
    },
    {
      name: "Installment Purchase",
      icon: InstallmentPurchase,
      desc: "You can simply buy internet package for yourself in Pay+. Automatic reminder and auto charge feature is also available for this item.",
    },
    {
      name: "Tolls",
      icon: Tolls,
      desc: "You can easily pay tolls online with Pay +, just go through the online payment inputs. You have a 14-day grace period to pay unpaid tolls.",
    },
    {
      name: "Taxi Fares",
      icon: TaxiFares,
      desc: "You can simply pay your fare by scanning the barcode available in the contract taxis. (Due to the spread of coronavirus, we recommend using online payment).",
    },
    {
      name: "Charity",
      icon: Charity,
      desc: "You can simply donate as much as you want to your country's charities in Pay+.",
    },
  ];

  return (
    <div className={Styles.servicesMain}>
      <h1 className={Styles.servicesHeading}>Some of our services:</h1>
      <div className={Styles.servicesContainer}>
        {services.map((service) => (
          <Service
            name={service.name}
            icon={service.icon}
            desc={service.desc}
            key={service.name}
          />
        ))}
      </div>
    </div>
  );
}

function Service({ name, icon, desc }) {
  return (
    <div className={Styles.serviceWrapper}>
      <div className={Styles.serviceLeft}>
        <h1 className={Styles.serviceName}>{name}</h1>
        <p className={Styles.serviceDesc}>{desc}</p>
      </div>
      <img className={Styles.serviceIcon} src={icon} alt={name} />
    </div>
  );
}

export default Services;
