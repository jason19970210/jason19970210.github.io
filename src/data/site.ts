export const site = {
  url: 'https://jason19970210.github.io',
  title: 'Jason Hsu | Embedded Software Engineer',
  shortName: 'Jason Hsu',
  description:
    'Jason (Yi-Cheih) Hsu is an embedded software engineer in Taipei who builds firmware, OTA updates, and device-to-cloud systems for networking and IoT hardware.',
  name: 'Yi-Cheih (Jason) Hsu',
  positioning: 'Embedded software engineer for networking and IoT devices, from bootloader to cloud.',
  intro:
    'I build the software that runs on network hardware and the services that keep it up to date. Right now I own OTA upgrades for an OpenWrt-based cellular repeater controller at Airgain. Earlier I wrote U-Boot for Marvell switches, and I led a small team building a device-to-cloud management platform.',
  writingIntro:
    'Notes from the bench on networking, embedded Linux, and the bugs I had to understand before I could fix them.',
  email: 'jason19970210@gmail.com',
  medium: { label: 'medium.com/@jason19970210', href: 'https://medium.com/@jason19970210' },
  linkedin: { label: 'linkedin.com/in/jason19970210', href: 'https://www.linkedin.com/in/jason19970210' },
  github: { label: 'github.com/jason19970210', href: 'https://github.com/jason19970210' },
  cv: '/Yi-Cheih_Hsu_CV.pdf',
  location: 'Taipei, Taiwan',
};

export const stack = [
  { href: '/experience/#senao', layer: 'Bootloader', detail: 'U-Boot, device tree' },
  { href: '/experience/#airgain', layer: 'OS', detail: 'Embedded Linux, OpenWrt' },
  { href: '/experience/#airgain', layer: 'Device services', detail: 'SNMP agent, web GUI, Modbus TCP' },
  { href: '/experience/#morelink', layer: 'Transport', detail: 'WireGuard, MQTT, AMQP' },
  { href: '/experience/#airgain', layer: 'Cloud', detail: 'FastAPI, AWS IoT Core, GCP' },
];

export type Job = {
  id: string;
  title: string;
  company: string;
  place: string;
  period: string;
  bullets: string[];
};

export const jobs: Job[] = [
  {
    title: 'Software Engineer',
    id: 'airgain',
    company: 'Airgain, Inc.',
    place: 'Taipei, Taiwan',
    period: 'Apr 2025 - Present',
    bullets: [
      'Own OTA upgrades end to end for an OpenWrt-based cellular repeater controller, from device tree and U-Boot through sysupgrade, SNMP agent, web GUI, and distribution service.',
      'Root-caused OTA releases that reported success without flashing to a console=null bootarg. Added SHA-256 checks and a reboot-confirmed run record, and fixed a path-MTU black hole that stalled cellular downloads.',
      'Built and operate the OTA service in FastAPI over WireGuard with systemd crash-loop protection. Prototyped AWS IoT Core delivery with per-device X.509 certificates, IoT Jobs over HTTPS, and S3 presigned URLs.',
      'Wrote a Modbus TCP agent in C that exposes a solar charge controller and battery to SNMP and the web GUI, packaged for OpenWrt and tested in CI against a Modbus simulator.',
    ],
  },
  {
    title: 'Solution Architect (Consultant)',
    id: 'morelink',
    company: 'Morelink Technology Corporation',
    place: 'Taipei, Taiwan',
    period: 'Jul 2023 - Mar 2026',
    bullets: [
      'Architected and led a team of five building a 4G/5G repeater management platform deployed to six ISPs worldwide.',
      'Built one Go codebase for a MIPS OpenWrt agent and a Dockerized GCP service, linked by AMQP pub/sub on RabbitMQ, with MongoDB-backed REST APIs and Socket.IO feeding Vue.js dashboards.',
      'Set up GitLab CI for unit tests and cross-compiled MIPS, amd64, and aarch64 builds.',
      'Implemented a UART protocol for the repeater and non-blocking network I/O, and built reverse SSH tunnels through carrier NAT for remote access required by EU regulations.',
    ],
  },
  {
    title: 'Software Firmware Engineer',
    id: 'senao',
    company: 'Senao Networks, Inc.',
    place: 'Taipei, Taiwan',
    period: 'Aug 2022 - May 2024',
    bullets: [
      'Built a two-stage U-Boot for Marvell AC5X-class switches with I2C EEPROM identity, DRAM POST, checksum, magic, and board-name validation, USB/TFTP recovery, and factory tests.',
      'Integrated a Realtek RTL9313 L3 PoE+ model and the Marvell CPSS SDK into an L2/L3 switch stack. Fixed an ACL DSCP bit-shift bug in the HAL, plus IGMP/MLD snooping and loopback-recovery defects.',
      'Automated verification in Python with Requests and Scapy, cutting 48-port test time by 83%, from 144 to 24 minutes.',
      'Taught Python to 30 engineers and mentored two new hires.',
    ],
  },
  {
    title: 'Co-Founder & CTO',
    id: 'skynet',
    company: 'Skynet Cybersecurity Consulting Co., Ltd.',
    place: 'Taipei, Taiwan',
    period: 'Jul 2020 - Present',
    bullets: [
      'Co-founded the company in 2020 and became CTO in May 2024.',
      'Lead a 10-person team on incident response and digital forensics for ransomware, APT, breach, and insider cases, following ISO/IEC 27037 and 17025.',
      'Guest lecturer at ITRI in 2021, teaching Internet of Vehicles security (CAN/OBD-II, LIN, FlexRay), penetration testing, and reconnaissance.',
    ],
  },
  {
    title: 'Cybersecurity Investigator & Software Developer',
    id: 'max-minder',
    company: 'Max-Minder Technology Service Provider Co., Ltd.',
    place: 'Taoyuan, Taiwan',
    period: 'Jul 2020 - Jul 2022',
    bullets: [
      'Led incident response and digital forensics cases.',
      'Built BLE mobile apps in Flutter, designed in Figma, for ECG and blood-pressure devices.',
    ],
  },
];

export const earlier =
  'Firmware Engineer Intern at Fitivision (Nov 2020 - Oct 2021), building an IEEE 802.15.4 IoT system in C on a TI CC1312R kit. Research assistant at Chang Gung University (Jul 2015 - Aug 2020).';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
  link?: { label: string; href: string; note?: string };
  linkNote?: string;
};

export const projects: Project[] = [
  {
    slug: 'esp32-wifi-mac',
    title: 'ESP32 Open-Source Wi-Fi MAC',
    summary:
      'A Wi-Fi MAC layer for the ESP32 written in C on reverse-engineered hardware registers, extending the open-source esp32-open-mac project.',
    highlights: [
      'Rewrote the upstream Rust 802.11 MAC (STA/AP, beacon, auth, assoc) in C, then added multi-client AP, intra-BSS forwarding, and runtime SSID and channel changes.',
      'Replaced boolean TX-slot tracking with a mutex-guarded slot state machine, collision retry with random backoff, and a watchdog that reclaims stuck DMA slots. Fixed wrong TX-error register addresses along the way.',
      'Built a PTP-style UDP multicast time-sync service and PTP-scheduled channel hopping with PHY-only fast switching. Result: nodes hop channels on a shared schedule and drive synchronized LEDs.',
    ],
    tags: ['C', 'FreeRTOS', 'ESP-IDF', 'ESP32', 'IEEE 802.11', 'PTP'],
    linkNote: 'Source code not public',
  },
  {
    slug: 'vfcs',
    title: 'VFCS: Vehicle Forensics Cloud System',
    summary:
      'My M.S. thesis. A system that collects driving data from a car, protects it with post-quantum cryptography, and keeps a verifiable chain of custody.',
    highlights: [
      'Raspberry Pi 4 collector reading OBD-II through an ELM327 bridge, 14 PIDs per query loop of about 1.5 s.',
      'NTRU encryption and FALCON signatures on driving data, about 0.525 s for 20 PIDs on the Pi. RabbitMQ to an evidence server with MongoDB, and Hyperledger Fabric chaincode for chain of custody.',
      'Isolation Forest anomaly detection on RPM data at 90.4% accuracy.',
    ],
    tags: ['Python', 'Raspberry Pi', 'OBD-II', 'CAN', 'NTRU', 'FALCON', 'RabbitMQ', 'Hyperledger Fabric'],
    link: {
      label: 'github.com/jason19970210/vehicleforensics',
      href: 'https://github.com/jason19970210/vehicleforensics',
      note: 'Proof-of-concept data logger from the thesis work',
    },
  },
  {
    slug: 'ilivenet',
    title: 'ilivenet (startup, 2019)',
    summary: 'A search platform for live streams across YouTube, Twitch and Facebook. It reached 10,000 monthly active users within its first month.',
    highlights: [
      'Led an 8-person team and designed the full architecture: crawlers, a Flask API in front of Elasticsearch, MongoDB, and a Node.js frontend on GCP, with crawl jobs scheduled across distributed IoT devices.',
      'Elasticsearch cluster of five nodes plus a master node, with field-boosted relevance (tag and host above title), language detection, and phrase matching with slop for Chinese queries.',
      "Background jobs removed offline streams by comparing each stream's thumbnail with the platform's offline image.",
    ],
    tags: ['Python', 'Flask', 'Elasticsearch', 'MongoDB', 'Node.js', 'GCP'],
    linkNote: 'Not public',
  },
  {
    slug: 'temi-ros',
    title: 'Temi ROS-Based Robot System',
    summary:
      'A robot service system built from scratch on the Android-based Temi robot, with a 4-person team I led as architect and developer.',
    highlights: ['Node.js backend server and Python scripts, connected to the robot through MQTT.', 'Redis and MongoDB for data storage.'],
    tags: ['Node.js', 'Python', 'Java', 'MQTT', 'Redis', 'MongoDB', 'Android'],
    link: { label: 'github.com/jason19970210/Temi-ROS', href: 'https://github.com/jason19970210/Temi-ROS' },
  },
  {
    slug: 'taiwan-handicapped-parking',
    title: 'Taiwan Handicapped Parking',
    summary: 'Collects handicapped parking locations from Taipei and New Taipei open data and syncs them to a Google Maps saved list.',
    highlights: [
      'Reads shapefile and paged CSV sources, detects WGS84 or TWD97 coordinates, and converts with pyproj. Polygon zones are reduced to their centroids.',
      'Syncs locations to Google Maps with Playwright, scheduled weekly in GitHub Actions.',
    ],
    tags: ['Python', 'pyproj', 'Playwright', 'GitHub Actions', 'open data'],
    link: {
      label: 'github.com/jason19970210/taiwan-handicapped-parking',
      href: 'https://github.com/jason19970210/taiwan-handicapped-parking',
    },
  },
  {
    slug: 'netscanner',
    title: 'NetScanner',
    summary: "A small Python tool that scans the local network and reports each host's operating system and MAC address.",
    highlights: ['Built on nmap through python-nmap, with netifaces for interface discovery.', 'Runs on Linux and macOS with no arguments needed.'],
    tags: ['Python', 'nmap', 'networking'],
    link: { label: 'github.com/jason19970210/NetScanner', href: 'https://github.com/jason19970210/NetScanner' },
  },
  {
    slug: 'musicai',
    title: 'MusicAI (2019)',
    summary: 'Personalized music recommendation using deep reinforcement learning on user behavior.',
    highlights: [
      'Implemented key iOS features and ported the recommendation model to the server.',
      "Judges' Award, 2019 Mobile Application Innovation Contest.",
    ],
    tags: ['iOS', 'Swift', 'Deep reinforcement learning'],
    linkNote: 'Not public',
  },
];

export const education = [
  {
    degree: 'M.S. in Computer Science and Information Engineering',
    school: 'National Central University',
    place: 'Taoyuan, Taiwan',
    period: 'Jun 2020 - Jul 2022',
    note: 'Advanced Defense Lab. Thesis on post-quantum cryptography for vehicle forensics.',
  },
  {
    degree: 'B.B.A. in Information Management',
    school: 'Chang Gung University',
    place: 'Taoyuan, Taiwan',
    period: 'Sep 2015 - Jun 2020',
    note: 'Transferred from Industrial Design in Feb 2018.',
  },
];

export const awards = [
  { title: "Excellence Award, NCU Dept. of Communication Engineering project competition, for V-GNMS (role: leadership)", year: '2024' },
  { title: "Special Judges' Award, Civil IoT Taiwan Datathon", year: '2021' },
  { title: "Judges' Award, ROS-Based Innovation Application Proposal", year: '2020' },
  { title: 'Silver Medal, gSIC-REAT (Rehabilitation Engineering and Assistive Technology)', year: '2020' },
  { title: "Judges' Award, Mobile Application Innovation Contest, for MusicAI", year: '2019' },
  { title: 'Greatest Design Award, Startup Weekend Education', year: '2019' },
  { title: 'Greatest Design Award, Startup Weekend Education', year: '2018' },
  { title: 'Merit Award, Apple App Mobile Innovation', year: '2018' },
];

export const certification = 'Google Cybersecurity Certificate (2024)';

export const skills = [
  { group: 'Languages', items: 'C, Python, Go, Node.js, TypeScript' },
  { group: 'Embedded & systems', items: 'Embedded Linux, OpenWrt, U-Boot, device tree, OTA, FreeRTOS (ESP-IDF), ESP32, Modbus TCP, SNMP' },
  { group: 'Networking', items: 'Layer 2/3 switching (Marvell CPSS, Realtek), IEEE 802.11, IEEE 802.15.4, WireGuard, MQTT, AMQP, WebSocket, UART, Scapy' },
  { group: 'Cloud & backend', items: 'AWS (IoT Core, S3, IAM, EC2), GCP, Docker, FastAPI, RabbitMQ, Kafka, Redis, MongoDB, GitLab CI' },
  { group: 'Security', items: 'Incident response and digital forensics (Magnet AXIOM, EnCase, FTK, Volatility), post-quantum cryptography, BLE and CAN bus security' },
  { group: 'Tools', items: 'Git, Claude Code, Codex' },
  { group: 'Spoken', items: 'Mandarin Chinese (native), English (professional working proficiency)' },
];

export const publication = {
  authors: 'C.-L. Hsu, Y.-C. Hsu, Y.-J. Shih, C.-W. Wu, F.-H. Hsu.',
  title: 'A Vehicle Forensics Framework with Post-Quantum Cryptography and Blockchain.',
  venue: '2024 International Symposium on Intelligent Signal Processing and Communication Systems (ISPACS), pp. 1-5, 2024.',
  doi: 'https://doi.org/10.1109/ISPACS62486.2024.10868749',
};

export const thesis = {
  title: 'VFCS: A Post-Quantum Cryptography-Based Vehicle Forensics Cloud System.',
  detail: 'M.S. thesis, National Central University, Jun 2022.',
};

export const patents = [
  { href: 'https://patents.google.com/patent/TWI814478B/en', id: 'TW I814478', title: 'Event Recording System and Vehicle-Mounted Event Recording Device', year: '2023' },
  { href: 'https://patents.google.com/patent/TWI836508B/en', id: 'TW I836508', title: 'Vehicle Event Handling Method', year: '2024' },
  { href: 'https://patents.google.com/patent/TWI777910B/en', id: 'TW I777910', title: 'A Wheelchair with the Function of a Walker', year: '' },
];

export const aboutIntro = 'Embedded software engineer in Taipei, working where hardware meets software.';

export const aboutPoints = [
  { lead: 'Bootloader to cloud:', text: 'U-Boot, device trees, OpenWrt, OTA pipelines, and the services that keep devices in the field up to date.' },
  { lead: 'Hard bugs on real hardware:', text: 'from OTA releases that reported success without flashing to a path-MTU black hole on cellular links.' },
  { lead: 'Security background:', text: 'M.S. thesis on post-quantum cryptography for vehicle forensics; co-founder and CTO of a digital forensics consultancy.' },
  { lead: 'Teaching:', text: 'taught Python to 30 engineers at Senao and lectured on vehicle network security at ITRI.' },
];

export const mediumPosts = [
  { date: '2024-01-25', title: 'A Step-by-Step Guide How to Deal With Expired GPG Keys', href: 'https://jason19970210.medium.com/a-step-by-step-guide-how-to-deal-with-expired-gpg-keys-72277e227e75' },
  { date: '2024-01-19', title: 'Minimum L3 IP Packet with Scapy in Python & Wireshark', href: 'https://jason19970210.medium.com/minimum-tcp-packet-with-scapy-in-python-wireshark-5ee93198a522' },
  { date: '2023-09-10', title: 'Golang Works with Shared Object Through cgo (.so Not Found Issue)', href: 'https://jason19970210.medium.com/golang-works-with-shared-object-through-cgo-so-not-found-issue-46a8ce423f8b' },
  { date: '2023-09-09', title: 'Great News from ngrok with Static Domains', href: 'https://jason19970210.medium.com/great-news-from-ngrok-with-static-domains-efd0c158cdde' },
  { date: '2023-05-23', title: 'To Beginners Learning with Minimum Python Environment Setup', href: 'https://jason19970210.medium.com/to-beginners-learning-with-minimum-python-environment-setup-d37a6cdc6d3d' },
  { date: '2023-05-17', title: 'Proper Setup for Netplan YAML File Permission', href: 'https://jason19970210.medium.com/proper-way-to-setup-netplan-yaml-file-permission-867da8eb026a' },
  { date: '2023-03-16', title: 'Back to Root View: Pure SwiftUI for iOS 16 with NavigationStack & NavigationDestination', href: 'https://jason19970210.medium.com/back-to-root-view-pure-swiftui-for-ios-16-with-navigationstack-navigationdestination-a054a3550851' },
];

export const community = [
  'AWS Community Day Taiwan, 2022-2026',
  'PyCon APAC, 2019-2025',
  'Women Who Code: Python mentor, 2021',
  'Women In Tech',
  'GDSC National Central University, 2021',
  'NCtfU CTF',
  'Open Up Summit, 2018',
  'FLYTECH rural maker camp, Zhiben, Taitung: video editing, 3D modeling and printing',
];

export const talks = [
  'ITRI: IoV security course (2021), red/blue team course (2021), AMR course (2022)',
  'ITE Tech: BT/BLE protocol and security issues (Jul 2022)',
  'Digital forensics basics for a military training unit (2021)',
  'iOS development course, Chang Gung University (2019)',
  'Taught Python to 30 engineers at Senao',
];
