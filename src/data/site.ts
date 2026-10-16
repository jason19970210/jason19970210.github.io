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
  about:
    "I started in industrial design, moved to information management, and ended up in a security lab writing my master's thesis on post-quantum cryptography for vehicle forensics. I have used Linux since university, starting with lab network administration. Most of my work sits where hardware meets software: bootloaders, device trees, Layer 2/3 switch stacks, OTA pipelines, and the cloud services that talk to devices in the field. I also co-founded a digital forensics consultancy and serve as its CTO. I like hard bugs on real hardware, and I like teaching what I learn from them. I taught Python to 30 engineers at Senao and lectured on vehicle network security at ITRI.",
  writingIntro:
    'Notes from the bench on networking, embedded Linux, and the bugs I had to understand before I could fix them.',
  email: 'jason19970210@gmail.com',
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
    slug: 'python-course-2021',
    title: 'Python Course 2021',
    summary: 'Materials from introductory Python courses in 2021.',
    highlights: [
      'Slides, outlines, and sample code for a Flask web development course and a web crawler course.',
      'Weekly outlines for beginner Python sessions, from setup and variables to loops, functions, and a first crawler.',
    ],
    tags: ['Python', 'Flask', 'Requests', 'BeautifulSoup', 'teaching'],
    link: { label: 'github.com/jason19970210/Python_Course_2021', href: 'https://github.com/jason19970210/Python_Course_2021' },
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
  { id: 'TW I814478', title: 'Event Recording System and Vehicle-Mounted Event Recording Device', year: '2023' },
  { id: 'TW I836508', title: 'Vehicle Event Handling Method', year: '2024' },
  { id: 'TW I777910', title: 'A Wheelchair with the Function of a Walker', year: '' },
];
