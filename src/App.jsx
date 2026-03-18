import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="govuk-template">
      <Header serviceName="GOV.UK" />
      <main className="govuk-main-wrapper" id="main-content" role="main">
        <div className="govuk-width-container">
          <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                <h1 className="govuk-heading-xl">
                  Welcome to GOV.UK
                </h1>
                <p className="govuk-body-l">
                  The best place to find government services and information.
                </p>
                <p className="govuk-body">
                  GOV.UK is the website for the UK government. It's the best place to find government services and information - simpler, clearer, faster.
                </p>
                <h2 className="govuk-heading-l">Popular services</h2>
                <ul className="govuk-list govuk-list--bullet">
                  <li>
                    <a href="#" className="govuk-link">Check your State Pension</a>
                  </li>
                  <li>
                    <a href="#" className="govuk-link">Renew your vehicle tax</a>
                  </li>
                  <li>
                    <a href="#" className="govuk-link">Find a job</a>
                  </li>
                  <li>
                    <a href="#" className="govuk-link">Report a problem with a road</a>
                  </li>
                  <li>
                    <a href="#" className="govuk-link">Get help with the cost of living</a>
                  </li>
                </ul>
                <h2 className="govuk-heading-l">News and communications</h2>
                <p className="govuk-body">
                  Stay up to date with the latest news and announcements from government departments and agencies.
                </p>
                <div className="govuk-inset-text">
                  <p className="govuk-body">
                    This site uses the rebranded GOV.UK Design System from June 2025, featuring the new blue header and updated footer design.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
