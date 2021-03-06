import { Fragment } from 'react'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import { Venue } from './types'

// tslint:disable:object-literal-sort-keys
const venue: Venue = {
  Name: 'Melbourne Convention and Exhibition Centre',
  Address: '1 Convention Centre Pl, South Wharf VIC 3006',
  Latitude: -37.8256,
  Longitude: 144.9531075,
  Afterparty: 'General Assembly',
  AfterpartyAddress: '29 South Wharf Promenade, Melbourne, VIC 3006',
  Wifi: 'MCEC has free wifi for all attendees limited to 512Kb download speed that needs to be renewed every hour.',
  Accommodation: null,
  Parking: (
    <Fragment>
      Visit the MCEC website for{' '}
      <SafeLink href="https://mcec.com.au/visit/visit-information" target="_blank">
        paid parking options
      </SafeLink>
      .
    </Fragment>
  ),
  Car: (
    <Fragment>
      The closest entrance to the DDD space in the exhibition centre is Convention Centre Place entrance. If you are
      being dropped off by uber/taxi, the address to provide the driver is 1 Convention Centre Pl, South Wharf VIC 3006.
      Please visit MCEC{' '}
      <SafeLink href="https://mcec.com.au/visit/visit-information" target="_blank">
        for further guidance
      </SafeLink>
      .
    </Fragment>
  ),
  Train: (
    <Fragment>
      The closest station is Southern Cross. Once you exit the station, you can catch the 96, 109 or 12 tram routes and
      arrive at MCEC in just a few stops. See{' '}
      <SafeLink href="https://www.ptv.vic.gov.au/" target="_blank">
        Public Transport Victoria
      </SafeLink>{' '}
      to plan your journey.
    </Fragment>
  ),
  Tram: (
    <Fragment>
      Tram routes 96, 109 and 12 will all take you from Southern Cross St to the Clarendon Street entrance (Stop 124A
      Casino/MCEC). Tram routes 70, 75 will take you from Flinders Street St to Spencer Street (Stop 1 Spencer/Flinders
      Street), it’s just a short walk up Clarendon Street until you reach MCEC. See{' '}
      <SafeLink href="https://www.ptv.vic.gov.au/" target="_blank">
        Public Transport Victoria
      </SafeLink>{' '}
      to plan your journey. If you enter via Clarendon Street entrance, please take note of the DDD event space location
      on the below map.
    </Fragment>
  ),
  Bus: null,
}

export default venue
