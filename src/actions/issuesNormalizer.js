import { schema, normalize } from 'normalizr';

const roleSchema = new schema.Entity('roles');
const creditSchema = new schema.Entity('credits', { role: [roleSchema] });
const arcSchema = new schema.Entity('arcs');
const issueSchema = new schema.Entity('issues', {
  arcs: [arcSchema],
  credits: [creditSchema]
});
const issueList = [issueSchema];

const issuesNormalizer = data => normalize(data, issueList);
export default issuesNormalizer;
