<template>
<div class="resume">
  <my-header style="z-index: 99;">
    <p slot='slot1'>About Me</p>
    <p slot='slot2'>Resume</p>
    <p slot='slot3'>Portfolio</p>
  </my-header>
  <div class="page">
    <div>
      <span><h4><strong>Technical Experience</strong></h4></span>
      <table class="table">
        <tr>
          <td>
            <div class="row">
              <div class="col">
                <dl class="text-center">
                  <dt>Backend</dt>
                  <dd>PHP, MySQL, MongoDB, Node.js</dd>
                </dl>
              </div>
              <div class="col">
                <dl class="text-center">
                  <dt>Frontend</dt>
                  <dd>HTML5, CSS3, JavaScript</dd>
                </dl>
              </div>
              <div class="col">
                <dl class="text-center">
                  <dt>Libraries/Frameworks</dt>
                  <dd>Express.js, Pug, Passport.js, jQuery, Bootstrap</dd>
                </dl>
              </div>
              <div class="col">
                <dl class="text-center">
                  <dt>Tools</dt>
                  <dd>Atom, phpMyAdmin, WAMP</dd>
                </dl>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <span><h4><strong>Work Experience</strong></h4></span>
      <table class="table table-my-style">
        <tr>
          <td class="description">
            <p><strong>Onstad's Insurance Agency - Front-End Developer</strong></p>
            <p>Architected an authenticated intranet to be deployed for remote employees. Built on an Express using Passport with bcrypt and MongoDB for password storage and encryption. Employed Pug to componentize headers and footers as well to power basic
              ‘for’ loops. Re-branded the intranet for a clean user experience while maintaining simplicity for future maintenance and updating. Assisted the Customer Service Representatives with various administrative tasks.</p>
          </td>
          <td class="no-wrap text-right">
            <p>San Ramon, CA<br>2017</p>
          </td>
        </tr>
        <tr>
          <td class="description">
            <p><strong>Narvar Inc. - Implementation Engineer - Contractor</strong></p>
            <p>Contracted to resolve a backlog of projects including product launches and outstanding page edits for shipping tracking pages. Collaborated with fellow implementation engineers to create a web app to assist future translations for international
              locales and correspondence with clients utilizing JavaScript, React, Node and Mongo. Cooperated with the Customer Success team to accurately create the webpages our clients had envisioned - interpreting client feedback, while acting as a
              liaison to the design team to create assets and full page mocks.</p>
          </td>
          <td class="no-wrap text-right">
            <p>San Francisco, CA<br>2017</p>
          </td>
        </tr>
        <tr>
          <td class="description">
            <p><strong>Onstad's Insurance Agency - Web Developer</strong></p>
            <p>Worked in an interdisciplinary team alongside three architecture students to develop a sustainable urban farming structure that functioned as an organism. Presented project in various formats including mid and final reviews, biomimicry exhibition,
              and student panels. </p>
          </td>
          <td class="no-wrap text-right">
            <p>San Ramon, CA<br>2012 &ndash; 2017</p>
          </td>
        </tr>
        <tr>
          <td class="description">
            <p><strong>CIEE Global Institute - Sustainable Architecture Project</strong></p>
            <p>Created all new responsive, mobile-first company intranet, with a minimally customized company branding theme. Developed with PHP, Bootstrap, and jQuery for ease of maintenance for a company without IT or engineering departments. Acted as
              assistant project manager for a variety of projects. Orchestrated massive upgrade of internal agency management system by organizing and migrating thousands of client and business records. Cross-verified the integrity of records to mitigate
              issues with data migration. Aided different departments answering phones, scanning documents into company database, and performed other administrative duties.</p>
          </td>
          <td class="no-wrap text-right">
            <p>Berlin, Germany<br> 2016</p>
          </td>
        </tr>
        <tr>
          <td class="description">
            <p><strong>Onstad's Insurance Agency - Customer Service Representative/Receptionist</strong></p>
            <p>Answered and directed phone calls, data entry, scanned documents and electronically attached them to the appropriate policy, processed daily mail, and ran data integrity reports. Supported the customer and sales teams issuing Evidences of
              Insurance for clients as needed. In addition to day-to-day tasks, I worked on the Data Conversion project moving the company’s records from paper to digital files.</p>
          </td>
          <td class="no-wrap text-right">
            <p>San Ramon, CA<br>2013 &ndash; 2015</p>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <span><h4><strong>Education</strong></h4></span>
      <table class="table">
        <tr>
          <td>
            <p><strong>California Polytechnic State University, San Luis Obispo</strong></p>
            <p>Studying Anthropology and Geography</p>
          </td>
          <td class="no-wrap text-right">
            <p>2014 &ndash; Present</p>
          </td>
        </tr>
        <tr>
          <td>
            <p><strong>The Council on International Educational Exchange, Berlin, Germany </strong></p>
            <p>Environmental sustainability, Architecture and Civil Engineering</p>
          </td>
          <td class="no-wrap text-right">
            <p>2016</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <div class="col">
        <span>
              <h4><strong>Languages</strong></h4>
            </span>
        <table class="table">
          <tr>
            <td>
              <dl>
                <div class="row">
                  <dt class="col">
                        <p class="text-right">English</p>
                      </dt>
                  <dd class="col">
                    <p>Native</p>
                  </dd>
                </div>
                <div class="row">
                  <dt class="col">
                        <p class="text-right">Japanese</p>
                      </dt>
                  <dd class="col">
                    <p>Adequate Fluency</p>
                  </dd>
                </div>
                <div class="row">
                  <dt class="col">
                        <p class="text-right">Spanish</p>
                      </dt>
                  <dd class="col">
                    <p>Limited Fluency</p>
                  </dd>
                </div>
              </dl>
            </td>
          </tr>
        </table>
      </div>
      <div class="col">
        <span>
              <h4><strong>Affiliations</strong></h4>
            </span>
        <table class="table">
          <tr>
            <td>
              <dl>
                <div class="row">
                  <dt class="col">
                        <p class="text-right">Political Science<br>Student Association (PSSA)</p>
                      </dt>
                  <dd class="col">
                    <p>2013 &ndash; 2016</p>
                  </dd>
                </div>
                <div class="row">
                  <dt class="col">
                        <p class="text-right">PSSA Treasurer</p>
                      </dt>
                  <dd class="col">
                    <p>2015 &ndash; 2016</p>
                  </dd>
                </div>
              </dl>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import myHeader from '../dumb/Header'
import myBanner from '../dumb/BannerText'
import myHeading1 from '../dumb/Headers'
export default {
  components: {
    myHeader,
    myBanner,
    myHeading1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: bold;
}

.whoami {
  background: #f1f1f1;
  height: 100%;
}

.bannerContainer {
  padding-top: 95px;
  padding-right: 20px;
}

.subHeader {
  font-family: Droid Sans, Arial, sans-serif;
  font-weight: normal;
}

@media (min-width:1440px) {
  .text {}
}

@media (min-width:1024px) and (max-width:1439px) {}

@media (min-width:768px) and (max-width:1023px) {}

@media (min-width:320px) and (max-width:767px) {}
</style>
