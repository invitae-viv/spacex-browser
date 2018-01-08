export const exampleLaunchA = {
  flight_number: 3,
  launch_year: '2008',
  launch_date_unix: 1217648040,
  launch_date_utc: '2008-08-02T03:34:00Z',
  launch_date_local: '2008-08-02T15:34:00+12:00',
  rocket: {
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'Merlin C',
    first_stage: {
      cores: [
        {
          core_serial: 'Merlin 1C',
          reused: false,
          land_success: false,
          landing_type: null,
          landing_vehicle: null,
        },
      ],
    },
    second_stage: {
      payloads: [
        {
          payload_id: 'Trailblazer',
          reused: false,
          customers: ['NASA'],
          payload_type: 'Satellite',
          payload_mass_kg: null,
          payload_mass_lbs: null,
          orbit: 'LEO',
        },
        {
          payload_id: 'PRESat',
          reused: false,
          customers: ['ORS'],
          payload_type: 'Satellite',
          payload_mass_kg: null,
          payload_mass_lbs: null,
          orbit: 'LEO',
        },
      ],
    },
  },
  telemetry: { flight_club: null },
  reuse: { core: false, side_core1: false, side_core2: false, fairings: false, capsule: false },
  launch_site: {
    site_id: 'kwajalein_atoll',
    site_name: 'Kwajalein Atoll',
    site_name_long: 'Kwajalein Atoll Omelek Island',
  },
  launch_success: false,
  links: {
    mission_patch: 'http://spacexpatchlist.space/images/thumbs/falcon_1_flight_3.png',
    article_link: 'http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary',
    video_link: 'https://www.youtube.com/watch?v=Qz0yJ8N3cA0',
  },
  details: 'Residual stage 1 thrust led to collision between stage 1 and stage 2',
}

export const exampleLaunchB = {
  flight_number: 4,
  launch_year: '2008',
  launch_date_unix: 1222643700,
  launch_date_utc: '2008-09-28T23:15:00Z',
  launch_date_local: '2008-09-28T11:15:00+12:00',
  rocket: {
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'Merlin C',
    first_stage: {
      cores: [
        {
          core_serial: 'Merlin 1C',
          reused: false,
          land_success: false,
          landing_type: null,
          landing_vehicle: null,
        },
      ],
    },
    second_stage: {
      payloads: [
        {
          payload_id: 'RatSat',
          reused: false,
          customers: ['SpaceX'],
          payload_type: 'Satellite',
          payload_mass_kg: 165,
          payload_mass_lbs: 363,
          orbit: 'LEO',
        },
      ],
    },
  },
  telemetry: { flight_club: null },
  reuse: { core: false, side_core1: false, side_core2: false, fairings: false, capsule: false },
  launch_site: {
    site_id: 'kwajalein_atoll',
    site_name: 'Kwajalein Atoll',
    site_name_long: 'Kwajalein Atoll Omelek Island',
  },
  launch_success: true,
  links: {
    mission_patch: 'http://spacexpatchlist.space/images/thumbs/falcon_1_flight_4.png',
    article_link: 'https://en.wikipedia.org/wiki/Ratsat',
    video_link: 'https://www.youtube.com/watch?v=dLQ2tZEH6G0',
  },
  details:
    'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
}

export const [flattenedA, flattenedB] = [exampleLaunchA, exampleLaunchB].map(launch => ({
  ...launch,
  site_name: launch.launch_site.site_name,
  rocket_name: launch.rocket.rocket_name,
}))
