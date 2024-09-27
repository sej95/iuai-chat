import { t } from 'i18next';

import { DEFAULT_AVATAR, DEFAULT_BACKGROUND_COLOR, DEFAULT_INBOX_AVATAR } from '@/const/meta';
import { featureFlagsSelectors } from '@/store/serverConfig/selectors';
import { createServerConfigStore } from '@/store/serverConfig/store';
import { SessionStore } from '@/store/session';
import { MetaData } from '@/types/meta';
import { merge } from '@/utils/merge';

import { sessionSelectors } from './list';

// ==========   Meta   ============== //
const currentAgentMeta = (s: SessionStore): MetaData => {
  const { enableCommercialInbox } = featureFlagsSelectors(createServerConfigStore().getState());

  const isInbox = sessionSelectors.isInboxSession(s);

  console.log('enableCommercialInbox', enableCommercialInbox);
  console.log('isInbox', isInbox);

  const defaultMeta = {
    avatar: isInbox ? DEFAULT_INBOX_AVATAR : DEFAULT_AVATAR,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    description: isInbox
      ? enableCommercialInbox
        ? t('chat.inbox.desc', { ns: 'custom' })
        : t('inbox.desc', { ns: 'chat' })
      : undefined,
    title: isInbox
      ? enableCommercialInbox
        ? t('chat.inbox.title', { ns: 'custom' })
        : t('inbox.title', { ns: 'chat' })
      : t('defaultSession'),
  };

  const session = sessionSelectors.currentSession(s);

  return merge(defaultMeta, session?.meta);
};

const currentAgentTitle = (s: SessionStore) => currentAgentMeta(s).title;
const currentAgentDescription = (s: SessionStore) => currentAgentMeta(s).description;
const currentAgentAvatar = (s: SessionStore) => currentAgentMeta(s).avatar;
const currentAgentBackgroundColor = (s: SessionStore) => currentAgentMeta(s).backgroundColor;

const getAvatar = (s: MetaData) => s.avatar || DEFAULT_AVATAR;
const getTitle = (s: MetaData) => s.title || t('defaultSession', { ns: 'common' });
// New session do not show 'noDescription'
export const getDescription = (s: MetaData) => s.description;

export const sessionMetaSelectors = {
  currentAgentAvatar,
  currentAgentBackgroundColor,
  currentAgentDescription,
  currentAgentMeta,
  currentAgentTitle,
  getAvatar,
  getDescription,
  getTitle,
};
