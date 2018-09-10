import { schema, normalize } from 'normalizr';

const role = new schema.Entity('roles');
const creator = new schema.Entity('creators');
const credit = new schema.Entity('credits', {
  creators: [creator],
  roles: [role]
});
const issue = new schema.Entity('issues', { credits: [credit] });

const issueList = [issue];

const issuesNormalizer = data => normalize(data, issueList);
export default issuesNormalizer;
