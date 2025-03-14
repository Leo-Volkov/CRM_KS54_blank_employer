import { Group } from '@/entities/group/lib/types'

export const defaultData: Group[] = [
  { id: '1', course: 2, semester: 1, specialty: 'ИСП', graduation: '11', groupsNum: '45' },
  { id: '2', course: 2, semester: 2, specialty: 'ИСП', graduation: '11', groupsNum: '45' },
]

export const MIN_COURSE = 1
export const MAX_COURSE = 4
export const MIN_SEMESTER = 1
export const MAX_SEMESTER = 2
