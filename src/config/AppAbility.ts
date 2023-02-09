import { AbilityBuilder, createMongoAbility, type MongoAbility } from '@casl/ability'
type Actions = 'create' | 'read' | 'update' | 'delete'
type Subjects = 'user'
export type AppAbility = MongoAbility<[Actions, Subjects]>

const ability = createMongoAbility()
const { can, rules, cannot } = new AbilityBuilder<AppAbility>(createMongoAbility)
export { ability, can, rules, cannot }

/**
 * @see https://casl.js.org/v6/en/guide/subject-type-detection#use-classes-as-subject-types
 */
