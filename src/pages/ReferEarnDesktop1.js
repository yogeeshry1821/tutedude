import FrameComponent1 from "../components/FrameComponent1";
import TermsConditions1 from "../components/TermsConditions1";
import FrameComponent from "../components/FrameComponent";
import Navbar1 from "../components/Navbar1";
import UIUXRefer1 from "../components/UIUXRefer1";
import "./ReferEarnDesktop1.css";
const ReferEarnDesktop1 = () => {
  return (
    <div className="refer-earn-desktop1">
      <div className="dashboard1">
        <div className="referral-earning-group">
          <div className="uiux">Referral Earning</div>
          <div className="div3">₹ 2,500</div>
        </div>
        <div className="total-referrals-group">
          <div className="uiux">Total Referrals</div>
          <div className="div3">7</div>
        </div>
        <FrameComponent1 />
        <div className="withdraw-balance2">
          <div className="withdraw-balance3">Withdraw Balance</div>
        </div>
      </div>
      <div className="your-referral-code">
        <div className="edch54-wrapper">
          <div className="edch54">EDCH54</div>
        </div>
        <div className="your-referral-code1">{`Your Referral Code `}</div>
      </div>
      <div className="how-does-it-work">
        <div className="friends-who-enrolled3-container">
          <span className="friends-who-enrolled">Friends who enrolled</span>
          <span className="span">(3)</span>
        </div>
        <div className="data">
          <div className="data-child" />
          <div className="content">
            <div className="invite-your-friends">Invite your Friends</div>
            <div className="share-the-link-container">
              <p className="share-the-link">Share the link tutedude.com with</p>
              <p className="share-the-link">your friends</p>
            </div>
          </div>
        </div>
        <div className="data1">
          <div className="data-child" />
          <div className="content1">
            <div className="friend-purchases-any">
              Friend purchases any course
            </div>
            <div className="enrolls-in-any-container">
              <p className="share-the-link">{`enrolls in any course using your `}</p>
              <p className="share-the-link">referral code</p>
            </div>
          </div>
        </div>
        <div className="data2">
          <div className="data-child" />
          <div className="content2">
            <div className="you-get-">You get __% referral money</div>
            <div className="of-total-purchase">
              Of total purchase the friend makes sharebale to your wallet
            </div>
          </div>
        </div>
        <div className="data3">
          <div className="data-child" />
          <div className="content3">
            <div className="transfer-money-from">
              Transfer money from wallet
            </div>
            <div className="when-the-wallet-container">
              <p className="share-the-link">When the wallet balance reaches</p>
              <p className="share-the-link">
                ₹200 or more, you can withdraw it
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="friends-who-enrolled1">Friends Who Enrolled</div>
      <TermsConditions1 />
      <section className="scrollable">
        <div className="referral-cards">
          <FrameComponent />
          <div className="subhash-mishra-parent">
            <b className="subhash-mishra">Subhash Mishra</b>
            <div className="sep-2022">15 Sep, 2022</div>
            <div className="courses-enrolled23">Courses Enrolled(23)</div>
            <div className="referral-amount-185">
              <div className="div5">₹485</div>
              <div className="referral-amount">{`Referral Amount `}</div>
            </div>
            <div className="frame-child" />
            <div className="scrollable-frame">
              <div className="all-courses">
                
                <div className="uiux-container">
                  <div className="uiux">UI/UX</div>
                </div>
                <div className="python-container">
                  <div className="uiux">Python</div>
                </div>
                <div className="photoshop-container">
                  <div className="uiux">Photoshop</div>
                </div>
                <div className="mern-container">
                  <div className="uiux">MERN</div>
                </div>
                <div className="illustrator-container">
                  <div className="uiux">Illustrator</div>
                </div>
                <div className="java-container">
                  <div className="uiux">Java</div>
                </div>
                <div className="c-container">
                  <div className="uiux">C++</div>
                </div>
              </div>
            </div>
          </div>
          <div className="subhash-mishra-parent">
            <b className="subhash-mishra">Prafull Kumar</b>
            <div className="sep-2022">16 Sep, 2022</div>
            <div className="courses-enrolled23">Courses Enrolled(23)</div>
            <div className="referral-amount-185">
              <div className="div5">₹485</div>
              <div className="referral-amount">{`Referral Amount `}</div>
            </div>
            <div className="frame-child" />
            <div className="scrollable-frame1">
              <div className="all-courses">
                <div className="uiux-container">
                  <div className="uiux">UI/UX</div>
                </div>
                <div className="python-container">
                  <div className="uiux">Python</div>
                </div>
                <div className="photoshop-container">
                  <div className="uiux">Photoshop</div>
                </div>
                <div className="mern-container">
                  <div className="uiux">MERN</div>
                </div>
                <div className="illustrator-container">
                  <div className="uiux">Illustrator</div>
                </div>
                <div className="java-container">
                  <div className="uiux">Java</div>
                </div>
                <div className="c-container">
                  <div className="uiux">C++</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="subtract">
        <div className="subtract-child" />
        <div className="subtract-item" />
      </div>
      <div className="refer-earn-desktop-item" />
      <nav className="header1">
        <div className="nav-bar1">
          <Navbar1 />
        </div>
      </nav>
      <div className="refer-earn-desktop-inner" />
      <UIUXRefer1 />
    </div>
  );
};

export default ReferEarnDesktop1;
