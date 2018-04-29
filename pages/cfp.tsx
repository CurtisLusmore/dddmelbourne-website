import Router from 'next/router'
import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/withSidebar'

class CFPPage extends React.Component<WithPageMetadataProps> {
  static getInitialProps({ res }) {
    const dates = getConferenceDates(Conference, dateTimeProvider.now())
    if (!dates.AcceptingPresentations) {
      if (res) {
        res.writeHead(302, {
          Location: '/',
        })
        res.end()
        res.finished = true
      } else {
        Router.replace('/')
      }
    }
    return {}
  }
  render() {
    const dates = this.props.pageMetadata.dates
    const conference = this.props.pageMetadata.conference
    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Call For Presentations (CFP)"
        hideBanner={true}
        description={conference.Name + ' Call For Presentations (CFP) page.'}
      >
        <h1>Call For Presentations (CFP)</h1>

        <p>
          This year we are using Sessionize to track submissions - this provides a great experience for speakers since
          you can resubmit talks submitted to other conferences that use Sessionize (e.g. NDC Sydney and the other DDD
          conferences in Australia) and you can update your profile and session information at any time.
        </p>

        <p className="text-center">
          <a className="btn content" target="_blank" href={conference.SessionizeUrl}>
            Submit a session via Sessionize
          </a>
        </p>

        <p>We want to encourage people that wouldn't normally speak at conferences to give it a go! We do this by:</p>
        <ul>
          <li>
            Having <strong>anonymous session voting</strong>; we will only show the title, abstract and tags of a talk
            to voters to remove unconscious bias
          </li>
          <li>
            Having a <strong>long (45 mins) and short (20 mins)</strong> talk option
          </li>
          <li>
            Accepting a <strong>broad range of technical and non-technical topics</strong> related to the software
            industry; if voters think you're talk is interesting, it's in!
          </li>
          <li>
            Encouraging submissions from <strong>multiple presenters as well as solo presenters</strong>
          </li>
          <li>
            Providing a{' '}
            <strong>
              <a href={'mailto:' + conference.MentoringEmail}>free mentoring service</a>
            </strong>; we have a bunch of experienced speakers who are happy to have a confidential chat with you to run
            through any ideas you have or give safe and constructive feedback
          </li>
          <li>
            Allowing speakers to opt out of question &amp; answer time at the end of their presentation if they don't
            feel comfortable doing it.
          </li>
        </ul>

        <p className="text-center">
          <a className="btn content" target="_blank" href={conference.SessionizeUrl}>
            Submit a session via Sessionize
          </a>
        </p>

        <p>Other things to note for presenters:</p>
        <ul>
          <li>
            In the past we've had a huge range of presentations including the following topics:{' '}
            {conference.PreviouslySubmittedTopics}.
          </li>
          <li>You will likely be speaking to an audience of between 50-150 people.</li>
          <li>
            Presentations are not a sales presentation although you are welcome to have a slide or two about yourself
            and your company.
          </li>
          <li>You will probably have internet access, but you should have a backup plan in case it's unavailable.</li>
          <li>
            We will open voting at{' '}
            {conference.VotingOpenFrom.format(dates.DateDisplayFormat + ' ' + dates.TimeDisplayFormat)}; if your
            presentation gets voted in and you agree to present then this is a serious commitment
          </li>
          <li>
            Questions? <a href={'mailto:' + conference.ContactEmail}>Fire off an email</a> and we'll get right back to
            you :)
          </li>
        </ul>

        <p className="text-center">
          <a className="btn content" target="_blank" href={conference.SessionizeUrl}>
            Submit a session via Sessionize
          </a>
        </p>
      </Page>
    )
  }
}

export default withPageMetadata(CFPPage)
