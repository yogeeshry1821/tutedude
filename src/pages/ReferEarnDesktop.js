import { useEffect } from "react";
import YourReferralCode from "../components/YourReferralCode";
import HowDoesItWork from "../components/HowDoesItWork";
import FriendsWhoEnrolled from "../components/FriendsWhoEnrolled";
import TermsConditions from "../components/TermsConditions";
import Navbar from "../components/Navbar";
import UIUXRefer from "../components/UIUXRefer";
import "./ReferEarnDesktop.css";
const ReferEarnDesktop = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="refer-earn-desktop">
      <div className="dashboard">
        <div className="referral-earning-parent">
          <div className="referral-earning">Referral Earning</div>
          <div className="div">₹ 2,500</div>
        </div>
        <div className="total-referrals-parent">
          <div className="referral-earning">Total Referrals</div>
          <div className="div">7</div>
        </div>
        <div className="wallet-balance-parent">
          <div className="referral-earning">Wallet Balance</div>
          <div className="div">₹ 500</div>
        </div>
        <div className="withdraw-balance">
          <div className="withdraw-balance1">Withdraw Balance</div>
        </div>
      </div>
      <YourReferralCode />
      <HowDoesItWork />
      <FriendsWhoEnrolled />
      <TermsConditions />
      <img className="bxsoffer-icon" alt="" src="/bxsoffer.svg" />
      <img className="groups-icon" alt="" src="/groups.svg" />
      <img
        className="account-balance-wallet"
        alt=""
        src="/account-balance-wallet.svg"
      />
      <img className="local-offer-icon" alt="" src="/local-offer.svg" />
      <b className="b">₹</b>
      <nav className="header" data-animate-on-scroll>
        <div className="nav-bar">
          <Navbar />
        </div>
      </nav>
      <div className="refer-earn-desktop-child" />
      <UIUXRefer />
    </div>
  );
};

export default ReferEarnDesktop;
