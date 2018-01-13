<template>
<div class="resume">
  <my-header style="z-index: 99;">
    <p slot='slot1'>About Me</p>
    <p slot='slot2'>Resume</p>
    <p slot='slot3'>Portfolio</p>
  </my-header>
  <div class="page">
    <div>
      <span><h4><strong>Work Experience</strong></h4></span>
      <table class="table table-my-style">
        <tr>
          <td class="description">
            <p><strong>California Polytechnic State University - Undergraduate Research, GIS</strong></p>
            <p>Locate GIS shapefile data, run calculations and analysis, and create maps. Work alongside Cal Poly Marine
Biology professor and Cal Poly Computer Science student on a project looking to develop a plan for sustainable
fisheries by incorporating regulation of high seas. </p>
          </td>
          <td class="no-wrap text-right">
            <p>San Luis Obispo, CA<br>2017 &ndash; Present</p>
          </td>
        </tr>
        <tr>
          <td class="description">
            <p><strong>Cal Poly Student Athlete Services - Student Athlete Tutor</strong></p>
            <p>Work with student athletes one on one to ensure academic excellence. Schedule a consistent meeting time
and location with individual tutees. Construct a personalized learning format for tutees based on their needs
and unique learning style.</p>
          </td>
          <td class="no-wrap text-right">
            <p>San Luis Obispo, CA<br>2017 &ndash; Present</p>
          </td>
        </tr>
        <tr>
          <td class="description">
            <p><strong>Cal Poly Conference and Event Planning - Conference Liaison</strong></p>
            <p>Assist conference coordinators with event logistics, correspondence, and set up as well as work the event. Plan and work single and multiday events with a wide range in attendees from 30 to 300 people. Handle payments from clients and process
              refund requests as well as daily office tasks. </p>
          </td>
          <td class="no-wrap text-right">
            <p>San Luis Obispo, CA<br>2016 &ndash; Present</p>
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
    <div>
      <span><h4><strong>Accolades, Languages and Technical Experience</strong></h4></span>
      <table class="table">
        <tr>
          <td>
            <div class="row">
              <div class="col">
                <dl class="text-center">
                  <dt>Accolades</dt>
                  <dd>Dean’s List, 7/8 Quarters - Cal Poly<br>Psychology Department Award - Castro Valley High School</dd>
                </dl>
              </div>
              <div class="col">
                <dl class="text-center">
                  <dt>Languages</dt>
                  <dd>English - Fluent<br>Spanish - Conversational<br>German - Elementary</dd>
                </dl>
              </div>
              <div class="col">
                <dl class="text-center">
                  <dt>Technical Experience</dt>
                  <dd>ArcGIS, Rhino, Microsoft Office Suite, InDesign</dd>
                </dl>
              </div>
            </div>
          </td>
        </tr>
      </table>
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
